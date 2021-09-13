import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Manuel Gutierrez </span>
            from <span className="purple"> New York </span>
            <br />I am a recent graduate with a Bachelors in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImCircleRight /> Architectural Photography
            </li>
            <li className="about-activity">
              <ImCircleRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I don't care if it works on your machine! We are not shipping your machine!"{" "}
          </p>
          <footer className="blockquote-footer">Vidiu Platon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
