import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MyStoryCards from "./MyStoryCards";
import Input from '@mui/material/Input';
import { AiOutlineSearch } from "react-icons/ai";

import anime from "../../Assets/Styles/Anime.png"
import oilpainting from "../../Assets/Styles/OilPainting.jpg"
import cartoon from "../../Assets/Styles/cartoon.jpg"
import watercolor from "../../Assets/Styles/watercolor.png"
import scifi from "../../Assets/Styles/scifi.jpg"
import sketch from "../../Assets/Styles/sketch.jpg"

function MyStory() {
  const ariaLabel = { 'aria-label': 'description' };
  const MyStoryData = [
    {
      imgPath: sketch,
      isBlog: false,
      title: "Sketch",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase.",
    }
  ]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple"> </strong>
        </h1>
        <AiOutlineSearch style={{ color: "green", fontSize: "30px", paddingBottom: "10px" }} />
        <Input placeholder="Search" inputProps={ariaLabel} color="success" focused />
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={sketch}
              isBlog={false}
              title="Sketch"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={cartoon}
              isBlog={false}
              title="Cartoon"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={anime}
              isBlog={false}
              title="Anime"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={oilpainting}
              isBlog={false}
              title="Oil Painting"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={watercolor}
              isBlog={false}
              title="Water Color"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={scifi}
              isBlog={false}
              title="SciFi"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyStory;
