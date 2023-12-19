import * as React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import StorySummaryCard from "./StorySummaryCard";
import BookCard from "./BookCard";
import { useParams } from "react-router-dom";


import axios from "axios";

function Story(props) {
    const bookID = useParams();
    const fname = "three_little_pig.png"
    const image = require("../../Assets/Story/" + fname);
    const [title, setTitle] = React.useState("Your story title");
    const [author, setAuthor] = React.useState("Author");
    const [createDate, setCreateDate] = React.useState("2023/12/20");
    const [thumbs, setThumbs] = React.useState(0);
    const [pages, setPages] = React.useState([]);
    const [summary, setSummary] = React.useState("Your story summary.");
    const [content, setContent] = React.useState("Your story content.");

    const handleSaveTitle = (newTitle) => {
        setTitle(newTitle);
    };
    const handleSaveAuthor = (newAuthor) => {
        setAuthor(newAuthor);
    }
    const handleSaveCreateDate = (newDate) => {
        setCreateDate(newDate);
    }
    const handleSaveSummary = (newSummary) => {
        setSummary(newSummary);
    }
    const handleSaveContent = (newContent) => {
        setContent(newContent);
    }
    const handleSaveThumbs = (newThumbs) => {
        setThumbs(newThumbs);
    }

    React.useEffect(() => {
        axios
          .get("https://web-app-backend-r3ac.onrender.com/book/" + bookID.bookID)
          .then((res) => {
            console.log(res.data);
            handleSaveTitle(res.data['book_name']);
            handleSaveAuthor(res.data['user']['username']);
            handleSaveCreateDate(res.data['create_time'].split('T')[0]);
            handleSaveThumbs(res.data['thumb']);
            setPages(res.data['pages']);
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
                    {title} <strong className="purple"> </strong>
                </h1>
                <StorySummaryCard
                    // imgPath={story}
                    id={bookID.bookID}
                    title={title}
                    summary={summary}
                    author={author}
                    createDate={createDate}
                    thumbs={parseInt(thumbs)}
                    handleSaveTitle={handleSaveTitle}
                    handleSaveSummary={handleSaveSummary}
                    handleSaveAuthor={handleSaveAuthor}
                    handleSaveCreateDate={handleSaveCreateDate}
                    handleSaveThumbs={handleSaveThumbs}
                />
                {/* 換行 */}
                {"\n"}
                {"\n"}
                <BookCard
                    id={bookID.bookID}
                    picture={image}
                    content={content}
                    pages={pages}
                    handleSaveContent={handleSaveContent}
                />
            </Container>
        </Container>
    );
}
export default Story;

