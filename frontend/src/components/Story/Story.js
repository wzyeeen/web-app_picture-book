import * as React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import story from "../../Assets/story.jpg";
import StorySummaryCard from "./StorySummaryCard";
import BookCard from "./BookCard";

function Story(props) {
    return (
        <Container fluid className="project-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
                Little Red Riding Hood <strong className="purple"> </strong>
            </h1>
            <StorySummaryCard
                // imgPath={story}
                title="Little Red Riding Hood"
                author="John Doe"
                creationDate="Creation Date: 01/01/2021"
                summary="This is a summary of the story."
            />
            {/* 換行 */}
            {"\n"}
            {"\n"}
            <BookCard
                // imgPath={story}
                content="This is the content of the story."
            />
          </Container>
        </Container>
      );
}
export default Story;

