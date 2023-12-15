import * as React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import story from "../../Assets/story.jpg";
import StorySummaryCard from "./StorySummaryCard";
import BookCard from "./BookCard";

function Story(props) {
  let date = new Date();
  const currentUser = localStorage.getItem('username');
  const [title, setTitle] = React.useState('Your story title');
  const [content, setContent] = React.useState("Your story content.");
  const handleSaveTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const handleSaveContent = (newContent) => {
    setContent(newContent);
  }
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Create Your Story <strong className="purple"> </strong>
        </h1>
        <StorySummaryCard
          // imgPath={story}
          title={title} 
          handleSaveTitle={handleSaveTitle}
          author={currentUser}
          createdDate={date.toLocaleDateString()}
        />
        {"\n"}
        {"\n"}
        <BookCard
          picture={story}
          content={content}
          handleSaveContent={handleSaveContent}
        />
      </Container>
    </Container>
  );
}
export default Story;

