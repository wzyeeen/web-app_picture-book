import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgHeart, CgPen } from "react-icons/cg";
import Input from '@mui/joy/Input';
import axios from 'axios';

function StyleCards(props) {
  // const [isLiked, setIsLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);

  // const handleLikeClick = () => {
  //   setIsLiked(!isLiked);
  //   setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  // };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    if (props.handleSaveTitle) {
      props.handleSaveTitle(editedTitle);
    }
    setIsEditing(false);
      var access_token = "";
      access_token = localStorage.getItem("access_token");
      const data = { book_name: editedTitle, tag: "anime" };
      axios
      .post('https://web-app-backend-r3ac.onrender.com/user/book', data, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }})
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('book_id', res.data.id);
        localStorage.setItem('page_id', res.data.pages[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className="book-card-view">
      <Card.Body>
        <Card.Title className="green">
          {isEditing ? (
            <Input
              type="text"
              variant="outlined"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            props.title
          )}
        </Card.Title>
        <Card.Text>
          Author: {props.author}
        </Card.Text>
        <Card.Text>
          Create Date: {props.createdDate}
        </Card.Text>
        {/* <Button
          variant={isLiked ? "danger" : "outline-danger"}
          onClick={handleLikeClick}
        >
          <CgHeart /> &nbsp; {likeCount}
        </Button> */}
        <Button
          variant="primary"
          onClick={isEditing ? handleSaveClick : handleEditClick}
          style={{ marginLeft: "10px" }}
        >
          <CgPen /> &nbsp; {isEditing ? "Save" : "Edit"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default StyleCards;
