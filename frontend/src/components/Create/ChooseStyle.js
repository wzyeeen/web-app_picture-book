import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import StyleCard from "./StyleCards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

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
          <Card className="project-card-view">
            <Card.Img variant="top" src={sketch} alt="card-img" />
            <Card.Body>
            <Card.Title>Sketch</Card.Title>
              {(
                <Button
                  variant="primary"
                  href="/story"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {localStorage.setItem('style', 'sketch')}}
                >
                  <CgWebsite /> &nbsp;
                  {"Select"}
                </Button>
              )}
            </Card.Body>
          </Card>
          </Col>

          <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={cartoon} alt="card-img" />
              <Card.Body>
              <Card.Title>Cartoon</Card.Title>
                {(
                  <Button
                    variant="primary"
                    href="/story"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {localStorage.setItem('style', 'cartoon')}}
                  >
                    <CgWebsite /> &nbsp;
                    {"Select"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
          

          <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={anime} alt="card-img" />
              <Card.Body>
              <Card.Title>Anime</Card.Title>
                {(
                  <Button
                    variant="primary"
                    href="/story"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {localStorage.setItem('style', 'anime')}}
                  >
                    <CgWebsite /> &nbsp;
                    {"Select"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={oilpainting} alt="card-img" />
              <Card.Body>
              <Card.Title>Oil Painting</Card.Title>
                {(
                  <Button
                    variant="primary"
                    href="/story"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {localStorage.setItem('style', 'oil painting')}}
                  >
                    <CgWebsite /> &nbsp;
                    {"Select"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={watercolor} alt="card-img" />
              <Card.Body>
              <Card.Title>Watercolor</Card.Title>
                {(
                  <Button
                    variant="primary"
                    href="/story"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {localStorage.setItem('style', 'watercolor')}}
                  >
                    <CgWebsite /> &nbsp;
                    {"Select"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img variant="top" src={scifi} alt="card-img" />
              <Card.Body>
              <Card.Title>SciFi</Card.Title>
                {(
                  <Button
                    variant="primary"
                    href="/story"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {localStorage.setItem('style', 'scifi')}}
                  >
                    <CgWebsite /> &nbsp;
                    {"Select"}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ChooseStyle;
