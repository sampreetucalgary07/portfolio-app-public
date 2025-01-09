import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { Container } from "react-bootstrap";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import {
  SiPytorch,
  SiTensorflow,
  SiMlflow,
  SiStreamlit,
  SiLinux,
  // SiNvidia,
  SiAmazons3,
  SiOpencv,
  SiSqlite,
  SiPandas,
  SiFastapi,
  SiPython,
  SiGithubactions,
  SiTableau,
  SiGooglecloud,
  SiDocker,
  SiYaml,
  // SiRedis,
  SiPostman,
  // SiGit,
  // SiFirebase,
  SiNpm,
  SiMongodb,
  // SiNextdotjs,
  // SiSolidity,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";
import { PiFlaskFill } from "react-icons/pi";

import { RiFileExcel2Line } from "react-icons/ri";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Container>
      <Row>
        <Col md={6} className="quadrant-container">
          <div className="quadrant">
            <h3 className="quadrant-title">
              {" "}
              Machine Learning and Deep Learning
            </h3>
            <Row>
              <Col xs={4} md={2} className="tech-icons">
                <SiPytorch />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiMlflow />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiStreamlit />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiOpencv />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiFastapi />
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={6} className="quadrant-container">
          <div className="quadrant">
            <h3 className="quadrant-title">Data Analytics and Visualization</h3>
            <Row>
              <Col xs={4} md={2} className="tech-icons">
                <SiPython />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiTableau />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiSqlite />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiPandas />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <RiFileExcel2Line />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiFastapi />
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={6} className="quadrant-container">
          <div className="quadrant">
            <h3 className="quadrant-title">Backend/Databases</h3>
            <Row>
              <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <PiFlaskFill />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiGithubactions />
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={6} className="quadrant-container">
          <div className="quadrant">
            <h3 className="quadrant-title">DevOps</h3>
            <Row>
              <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiNpm />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <VscAzure />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiGooglecloud />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiAmazons3 />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiYaml />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
