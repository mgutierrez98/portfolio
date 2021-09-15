import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGo,
  DiJava,
  DiPython,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a 
          href="https://github.com/kubernetes/kubernetes/pulls?q=is%3Apr+author%3Amgutierrez98+is%3Aclosed"
          style={{ color: "white" }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <DiGo />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a 
          href="https://github.com/mgutierrez98/Recruiter-Web-Scraper"
          style={{ color: "white" }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" href="www.google.com">
        <a 
          href="https://github.com/mgutierrez98/Emotion-Based-Music-Curator"
          style={{ color: "white" }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
