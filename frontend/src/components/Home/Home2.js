import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../Assets/intro_img.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="green"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              PixieTales is a creative haven where users collaborate seamlessly with AI to craft enchanting picture books. 
              <br />
              <br />With an intuitive interface and a palette of AI-powered tools, you can bring their stories to life through vibrant illustrations, personalized characters, and captivating narratives. 🥳
              <br />
              <br />
              Join PixieTales today and unlock the door to a world where creativity knows no bounds. Let your imagination soar as you create, collaborate, and share magical stories with the world! 🌟 <br />
              &nbsp;
              <i>
                <b className="green">#PixieTales #CreateWithAI #PictureBookMagic</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="Img">
            <Tilt>
              <img src={Img} className="img-fluid" alt="pic" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              <span className="green">Connect us</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
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
      </Container>
    </Container>
  );
}
export default Home2;
