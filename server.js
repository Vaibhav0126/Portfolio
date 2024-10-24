require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Nodemailer transport configuration
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "singhvaibhav9896@gmail.com", // environment variable or hardcoded
    pass: process.env.EMAIL_PASS || "hskw rlyx tkoo plgw"          // environment variable or hardcoded
  },
});

// Verify the email transport configuration
contactEmail.verify((error) => {
  if (error) {
    console.log("Email verification error:", error);
  } else {
    console.log("Ready to send emails");
  }
});

// POST route for sending contact form data
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`; // Add space between first and last name
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  // Email structure
  const mail = {
    from: name,
    to: "singhvaibhav9896@gmail.com", // The recipient email
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Failed to send message", error });
    } else {
      res.status(200).json({ code: 200, status: "Message sent successfully" });
    }
  });
});