import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MyStoryCards from "./MyStoryCards";
import Input from '@mui/material/Input';
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

import anime from "../../Assets/Styles/Anime.png"
import oilpainting from "../../Assets/Styles/OilPainting.jpg"
import cartoon from "../../Assets/Styles/cartoon.jpg"
import watercolor from "../../Assets/Styles/watercolor.png"
import scifi from "../../Assets/Styles/scifi.jpg"
import sketch from "../../Assets/Styles/sketch.jpg"

import littlegirl from "../../Assets/Story/little_girl.png"
import pigs from "../../Assets/Story/three_little_pig.png"
import corgi from "../../Assets/Story/corgi.png"

function MyStory() {
  const ariaLabel = { 'aria-label': 'description' };
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const access_token = localStorage.getItem("access_token");
  const currentUser = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book", { headers: { Authorization: `Bearer ${access_token}`, } })
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [access_token]);
  const filteredBooks = books.filter((book) => {
    return search !== null && book.book_name.toLowerCase().includes(search.toLowerCase());
  });
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
        <Input
          placeholder="Search"
          inputProps={ariaLabel}
          color="success"
          focused
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {filteredBooks.map((book) => (
            <Col key={book.id} md={4} className="project-card">
              <MyStoryCards
                id={book.id}
                imgPath={book.pages[0].image_url} // Assuming the first page image represents the book
                isBlog={false}
                title={book.book_name}
                thumb={parseInt(book.thumb)}
                ghLink={"/ViewMyStory/"+book.id}
              // Include other properties you want to display
              />
            </Col>
          ))}
        </Row>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={corgi}
              isBlog={false}
              title="How to be a Corgi"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="/corgi"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <MyStoryCards
              imgPath={littlegirl}
              isBlog={false}
              title="Little Red Riding girl"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="/littlethreepigs"
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
        </Row>
      </Container>
    </Container>
  );
}

export default MyStory;
