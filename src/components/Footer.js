import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vaibhav-singh-a4a5a8288/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="" />
                </a> */}
              <a href="https://www.instagram.com/vaibhav1_46/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
                <p>Copyright 2024. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}