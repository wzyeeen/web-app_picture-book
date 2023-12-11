import * as React from "react";
import Particle from "../../../Particle";
import { Container } from "react-bootstrap";
import threelittlepigs from "../../../../Assets/Story/three_little_pig.png";
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
                    Three Little Pigs <strong className="purple"> </strong>
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
                    picture={threelittlepigs}
                    content={content}
                    handleSaveContent={handleSaveContent}
                />
            </Container>
        </Container>
    );
}
export default Story;

