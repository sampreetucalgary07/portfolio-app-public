import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import profile_photo from "../../Assets/profile_photo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row id="main-home">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sampreet Vaidya, </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}

            <Col md={5} style={{ paddingBottom: 20 }}>
              <figure style={{ textAlign: "center" }}>
                {" "}
                {/* Aligning image and caption center */}
                <img
                  src={profile_photo} // Path to your uploaded photo
                  alt="Sampreet Vaidya"
                  className="img-fluid"
                  style={{
                    maxHeight: "420px",
                    objectFit: "cover",
                    objectPosition: "botton",
                    width: "75%",
                    borderRadius: "5%",
                  }}
                />
                <figcaption
                  style={{
                    fontSize: "0.9rem",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                >
                  Me visting Mt. Rainier near Seattle, USA.
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
