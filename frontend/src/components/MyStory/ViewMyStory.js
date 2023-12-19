import * as React from "react";
import { useEffect, useState } from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import story from "../../Assets/story.jpg";
import StorySummaryCard from "./StorySummaryCard";
import BookCard from "./BookCard";
import { useParams } from "react-router-dom";
//import { updatePage } from "./api/get-book-info";
import axios from 'axios';

export default function ViewMyStory() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const access_token = localStorage.getItem("access_token");
  const currentUser = localStorage.getItem('username');
  const [title, setTitle] = React.useState("bookInfo.book_name");
  const [author, setAuthor] = React.useState("bookInfo.user.username");
  const [content, setContent] = React.useState("Your story content.");
  useEffect(() => {
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book/" + bookId, { headers: { Authorization: `Bearer ${access_token}` }})
      .then((res) => {
        setBookInfo(res.data);
        console.log(bookInfo);
        setTitle(res.data.book_name);
        console.log(bookInfo.user);
        setAuthor(res.data.user.username);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  const handleSaveTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handleSaveContent = (newContent) => {
    setContent(newContent);
  }
  return (
    <div>
      {IsLoading ?
      (<p></p>) : (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {title} <strong className="purple"> </strong>
          </h1>
          <StorySummaryCard
            // imgPath={story}
            title={bookInfo.book_name} 
            handleSaveTitle={handleSaveTitle}
            author={author}
            createdDate={bookInfo.create_time.split('T')[0]}
            likes={bookInfo.thumb}
            bookId={bookInfo.id}
          />
          {"\n"}
          {"\n"}
          <BookCard
            pages={bookInfo.pages}
            handleSaveContent={handleSaveContent}
          />
        </Container>
      </Container>
      )}
    </div>
  );
}
