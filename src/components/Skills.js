import meter1 from "../assets/img/meter1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am proficient in popular programming languages such as C/C++,
                Java, Python, SQL, and JavaScript (React, React Native). I have
                strong experience with GraphQL, Tailwind CSS, and
                object-oriented programming (OOP). Additionally, I am skilled in
                working with Linux (Ubuntu), Windows, and macOS, alongside tools
                like AutoCAD, Figma, and MATLAB.<br></br> Outside of tech, I
                enjoy photography, playing guitar, cooking, and working out.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C/C++</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Perl</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Php</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Ubuntu</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Windows</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>AutoCAD</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Matlab</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Ardino UNO</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
