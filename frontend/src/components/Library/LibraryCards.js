import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgHeart } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function LibraryCards(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text style={{ textAlign: "justify" }}> */}
        {/* {props.description} */}

        {/* </Card.Text> */}
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {(
          <><Button
            variant={isLiked ? "danger" : "outline-danger"}
            onClick={handleLikeClick}
          >
            <CgHeart /> &nbsp;{likeCount}
          </Button><Button
            variant="primary"
            href={props.ghLink}
            // target="_blank"
            style={{ marginLeft: "10px" }}
          >
              <CgWebsite /> &nbsp;
              {"View"}
            </Button></>
        )}
      </Card.Body>
    </Card>
  );
}
export default LibraryCards;
