import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import kubernetes from "../../Assets/Projects/kubernetes.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import rising from "../../Assets/Projects/88logo.png";
import scraper from "../../Assets/Projects/webscraper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={kubernetes}
              isBlog={false}
              title="Kubernetes"
              description="My open-source contributions to the Kubernetes project"
              link="https://github.com/kubernetes/kubernetes/pulls?q=is%3Apr+author%3Amgutierrez98+is%3Aclosed"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Based Music Curator"
              description="Trained a emotion recognition model using 'FER-2013 dataset' with Keras and tensorflow backened. The emotion recognition model predicted the various types of emotions with an accuracy of 60%.
              OpenCV was used to capture real-time face detection. This video feed was then processed to determine the users emotion. The users emotion was then used to curate a music playlist uysing Spotify's API which 
              would create a playlist that correlates to the users percieved emotion"
              link="https://github.com/mgutierrez98/Emotion-Based-Music-Curator"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={rising}
              isBlog={false}
              title="88 Rising Website"
              description="Designed and developed a website for an artist which featured upcoming tours, recent music through Spotify’s web API, newsletters and information on the artist. Implemented MySQL to intake users' emails to be notified of 
              upcoming tours or music releases."
              link="https://github.com/mgutierrez98/88-Rising-Website"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={scraper}
              isBlog={false}
              title="Recruiter Webscraper"
              description="Built a web scraper that takes an Indeed URL and presents a table of job listing data and the recruiter’s LinkedIn page. Recruiter information and job information are thenn cached, speeding up sudsequent uses by 15%"
              link="https://github.com/mgutierrez98/Recruiter-Web-Scraper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
