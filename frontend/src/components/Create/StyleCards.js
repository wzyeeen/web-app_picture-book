import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function StyleCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {(
          <Button
            variant="primary"
            href="/story"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Select"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default StyleCards;
