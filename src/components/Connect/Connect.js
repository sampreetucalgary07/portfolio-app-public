import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Connect() {
  return (
    <Container fluid className="connect-section" id="connect">
      <Container>
        <Row>
          <Col md={16} className="home-about-social">
            <h1>LET's CONNECT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sampreetucalgary07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SampreetVaidya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/sampreet-v-70b36b1a1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sampreet_03_hs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {
          /* <Container fluid className="home-about-section" id="connect">
          <Col md={16} className="home-about-social">
            <h1>LET's CALL</h1>
            <p>
              Feel free to <span className="purple">call</span> me: +1 (780)
              710-3379
            </p>
          </Col>
          
        </Container>*/
          <Container fluid className="home-about-section" id="connect">
            <Col md={16} className="home-about-social">
              <p>
                💌 Feel free to <span className="purple">email</span> me :
                <a href="mailto:sampreet.v.ai@gmail.com">
                  sampreet.v.ai@gmail.com
                </a>
              </p>
              <br />
              <br />
              <p>
                ☎︎ And if you prefer to <span className="purple">call</span> :
                <a href="tel:+17807103379">+1 (780) 710-3379</a>
              </p>
            </Col>
          </Container>
        }
      </Container>
    </Container>
  );
}
export default Connect;
