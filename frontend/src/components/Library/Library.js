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
import axios from "axios";

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
