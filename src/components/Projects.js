import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const projects = [
  {
    title: "Medical Bills Reimbursement Application for IIT Ropar ",
    description: "under the guidance of Dr. Puneet Goyal ",
    imgUrl: projImg1,
    githubUrl: "https://github.com/",
  },
  {
    title: "Railway Reservation System ",
    description: "under the guidance of Dr. Vishwanath Gunturi ",
    imgUrl: projImg2,
    githubUrl: "https://github.com/",
  },
  {
    title: "Uni-Fi - Campus Navigation App ",
    description: "under the guidance of Dr. Shashi Shekhar Jha ",
    imgUrl: projImg3,
    githubUrl: "https://github.com/",
  },
  {
    title: "Application for Online Registration of Dairy and Poultry Farmers ",
    description: "Ministry of Fisheries, Animal Husbandry and Dairying, Government of India (Smart India Hackathon) ",
    imgUrl: projImg1,
    githubUrl: "https://github.com/",
  },
];


  const projects2 = [
    
    {
      title: "Utility Based Cache(UCP) Partition on Champ-sim",
      description: "under the guidance of Dr. Shirshendu Das",
      imgUrl: projImg2,
      githubUrl: "https://github.com/",
    },
    {
      title: "CUCU Compiler",
      description: "under the guidance of Dr. Deepti R.Bathula",
      imgUrl: projImg3,
      githubUrl: "https://github.com/",
    },
  ];

  
    const projects3 = [
      
      {
        title: "Implementation and Analysis of Skip Lists",
        description: "under the guidance of Dr. Anil Shukla",
        imgUrl: projImg3,
        githubUrl: "https://github.com/",
      },
      {
        title: "Hardware Design",
        description: "under the guidance of Dr. Neeraj Goel",
        imgUrl: projImg2,
        githubUrl: "https://github.com/",
      },
      {
        title: "Open forum discussion platform for Waste Management Techniques",
        description: "under the guidance of Dr. Kamal Kumar Chaudhary",
        imgUrl: projImg3,
        githubUrl: "https://github.com/",
      },
    ];
    export const Projects = () => {
    
    return (
      <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
