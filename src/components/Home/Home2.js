import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// // import About from "../../components/About/About";

// import Particle from "../Particle";
// // import Github from "./Github";
// import Techstack from "../../components/About/Techstack";
// import Aboutcard from "../../components/About/AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "../../components/About/Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Sampreet Vaidya </span>{" "}
              (in short: Sam). <br />
              <br />
              {/* from <span className="purple"> Bhubaneswar, India.</span> */}I
              recently completed my{" "}
              <span className="purple">masters (MSc) </span> in Software
              Engineering at the{" "}
              <span className="purple">University of Calgary, Canada.</span>{" "}
              After all these years of learning, I am now ready to wear my next
              hat 🎩 (looking to join a cool team!! 😎), where I can build
              somthing amazing 🪄.
              <br />
              <br />
              During my undergrad days, the term "AI" was was gaining renewed
              attention (it's winter passed, I heard!). Intrigued, I enrolled in
              a bootcamp hoping to learn something "cool" - and I certainly did
              🙌🏻. Fast foward to today, I’ve gained extensive knowledge
              (although feels little!) in Data Analytics, Data Science, Machine
              Learning through professional experience and internships. As a
              result, some of my work even got accepted into reputed
              international conferences (Yay! 🎉).
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, SQL and Javascript </b>.
              </i>
              <br />
              <br />
              As of now, my interests are building new{" "}
              <i>
                <b className="purple"> products involving AI usecases</b> and
                also reading research papers related to{" "}
                <b className="purple">Model compression</b>.
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
              Apart from coding and reading research papers (new ideas!), I love
              to do :
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Playing Badminton and Table Tennis
                </li>
                <li className="about-activity">
                  <ImPointRight /> Reading tech blogs
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Container fluid className="about-section">
          <Row id="about-section">
            <Particle />
            <Container>
              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col
                  md={7}
                  style={{
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px",
                  }}
                >
                  <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Know Who <strong className="purple">I'M</strong>
                  </h1>
                  <Aboutcard />
                </Col>
                <Col
                  md={5}
                  style={{ paddingTop: "120px", paddingBottom: "50px" }}
                  className="about-img"
                >
                  <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>
              </Row>
              <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
              </h1>

              <Techstack />

              <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
              </h1>
              <Toolstack />

              <Github />
            </Container>
          </Row>
        </Container> */}
      </Container>
    </Container>
  );
}
export default Home2;
