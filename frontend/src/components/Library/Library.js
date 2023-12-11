import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LibraryCard from "./LibraryCards";
import Input from '@mui/material/Input';
import { AiOutlineSearch } from "react-icons/ai";

import anime from "../../Assets/Styles/Anime.png"
import oilpainting from "../../Assets/Styles/OilPainting.jpg"
import cartoon from "../../Assets/Styles/cartoon.jpg"
import watercolor from "../../Assets/Styles/watercolor.png"
import scifi from "../../Assets/Styles/scifi.jpg"
import sketch from "../../Assets/Styles/sketch.jpg"
import littlegirl from "../../Assets/Story/little_girl.png"

import axios from "axios";

import pigs from "../../Assets/Story/three_little_pig.png"

function Library() {
  const ariaLabel = { 'aria-label': 'description' };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Enjoy Others' Work <strong className="purple"> </strong>
        </h1>
        <AiOutlineSearch style={{ color: "green", fontSize: "30px", paddingBottom: "10px" }} />
        <Input placeholder="Search" inputProps={ariaLabel} color="success" focused />
        {/* <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        /> */}

        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <LibraryCard
              imgPath={pigs}
              isBlog={false}
              title="Three Little Pigs"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="/littlethreepigs"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <LibraryCard
              imgPath={littlegirl}
              isBlog={false}
              title="Little Red Riding girl"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="/littlethreepigs"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          {books.map(book => (
            <Col key={book.id} md={4} className="project-card">
              <LibraryCard
                imgPath={book.pages[0].image_url} // Assuming the first page image represents the book
                isBlog={false}
                title={book.book_name}
                description={`Thumb Count: ${book.thumb}`}
              // Include other properties you want to display
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Library;
