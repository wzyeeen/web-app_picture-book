import * as React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import story from "../../Assets/story.jpg";
import StorySummaryCard from "./StorySummaryCard";
import BookCard from "./BookCard";

function Story(props) {
  const [title, setTitle] = React.useState("Your story title");
  const [summary, setSummary] = React.useState("Your story summary.");
  const [content, setContent] = React.useState("Your story content.");
  const handleSaveTitle = (newTitle) => {
    setTitle(newTitle);
  };
  const handleSaveSummary = (newSummary) => {
    setSummary(newSummary);
  }
  const handleSaveContent = (newContent) => {
    setContent(newContent);
  }
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {title} <strong className="purple"> </strong>
        </h1>
        <StorySummaryCard
          // imgPath={story}
          title={title}
          summary={summary}
          handleSaveTitle={handleSaveTitle}
          handleSaveSummary={handleSaveSummary}
          author="John Doe"
          creationDate="Creation Date: 01/01/2021"
        />
        {/* 換行 */}
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

