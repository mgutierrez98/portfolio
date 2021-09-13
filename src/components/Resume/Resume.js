import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/ManuelGutierrez.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
        <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="St. Thomas Aquinas College [Sparkill, NY] "
              date="2018 - 2021"
              content={[`Bachelors in Computer Science`,
                      'GPA: 3.46' ] }
            />

            <h3 className="resume-title">Honors</h3>
            <Resumecontent
              title=""
              content={[
                "Kappa Mu Epsilon Member",
                "Dean's List Nominee",
              ]}
            />
          </Col>
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Open Source Contributor - Kubernetes"
              date="July 2021 - Present"
              content={[
                " Refactored wait_test within the test/e2e package: PR#103219",
                " Refactored e2e_tests within the test/e2e package: PR#103269",
                " Refactored various files within the test/e2e package: PR#103222",
                " Implemented capability checks for restricted level pods: PR#103469",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
