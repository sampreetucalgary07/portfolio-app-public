import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import warehouse from "../../Assets/Projects/warehouse.png";
import ml from "../../Assets/Projects/ML.png";
import deep3d from "../../Assets/Projects/deep3d.png";
import second from "../../Assets/Projects/second.png";
import first from "../../Assets/Projects/first.png";
import llm from "../../Assets/Projects/LLM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Most of my research experimentation have been in local environment,
          but sharing some projects which I have worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={second}
              isBlog={false}
              title="8K compression using Gen AI"
              description="This project investigates the compression and transmission of 8K stereoscopic VR content using VAE-GAN latents integrated with standard encoders. Our approach is designed to achieve high-quality compression and efficient streaming, making it suitable for immersive applications."
              ghLink="https://github.com/sampreetucalgary07/8K-stereoscopic-VR-compression.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm}
              isBlog={false}
              title="LLM based Job Analyzer"
              description="This project harnesses the power of Large Language Model (LLM) APIs for job profile analysis and matching. This tool can streamline the recruitment process and empower job seekers with valuable insights about the skills required."
              ghLink="https://github.com/sampreetucalgary07/AI-resume-profile-matcher.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deep3d}
              isBlog={false}
              title="Research paper Implementation"
              description="This repository contains a PyTorch implementation of the Deep 3D paper, a popular method for monocular-to-stereo image conversion. The paper introduces a novel approach for generating depth information from single images to create stereo pairs, leveraging deep learning techniques."
              ghLink="https://github.com/sampreetucalgary07/Deep3D-pytorch.git"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Smart Warehouse System"
              description="In this project, a smart warehouse counting system has been implemented using Artificial intelligence, IoT and cloud (Microsoft Azure) where the counting of boxes can be done remotely and slightest human intervention."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first}
              isBlog={true}
              title="Time Series Prediction"
              description="Implemented machine learning (ML) algorithms for frame size prediction using scikit-learn and TensorFlow to
enable resource allocation in cloud VR server. Achieved 54% improvement in QoS metrics."
              ghLink="https://ieeexplore.ieee.org/abstract/document/10437897"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Other AI Projects"
              description="I have been learning ML for a long time and I always believed the best way to learn about some basics would be to implement it. This repo contains some of my ML basics notebooks when I entered into the field."
              ghLink="https://github.com/sampreetucalgary07/Machine-Learning-Projects.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
