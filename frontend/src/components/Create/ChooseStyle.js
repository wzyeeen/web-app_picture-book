import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import StyleCard from "./StyleCards";

import anime from "../../Assets/Styles/Anime.png"
import oilpainting from "../../Assets/Styles/OilPainting.jpg"
import cartoon from "../../Assets/Styles/cartoon.jpg"
import watercolor from "../../Assets/Styles/watercolor.png"
import scifi from "../../Assets/Styles/scifi.jpg"
import sketch from "../../Assets/Styles/sketch.jpg"

function ChooseStyle() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Select a style you like <strong className="green"> </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <StyleCard
              imgPath={sketch}
              title="Sketch"
            />
          </Col>

          <Col md={4} className="project-card">
            <StyleCard
              imgPath={cartoon}
              title="Cartoon"
            />
          </Col>

          <Col md={4} className="project-card">
            <StyleCard
              imgPath={anime}
              title="Anime"           
            />
          </Col>

          <Col md={4} className="project-card">
            <StyleCard
              imgPath={oilpainting}
              title="Oil Painting"
            />
          </Col>

          <Col md={4} className="project-card">
            <StyleCard
              imgPath={watercolor}
              title="Water Color"
            />
          </Col>

          <Col md={4} className="project-card">
            <StyleCard
              imgPath={scifi}
              title="SciFi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ChooseStyle;
