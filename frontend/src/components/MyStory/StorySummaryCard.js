import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgHeart, CgPen } from "react-icons/cg";
import Input from '@mui/joy/Input';
import { likeAdd, likeCancel } from "./api/get-book-info";

function StyleCards(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Number(props.likes));
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);

  const handleLikeClick = () => {
    if(isLiked){// liked
      likeCancel(props.bookId);
      setLikeCount(likeCount - 1);
    }else{// not liked
      likeAdd(props.bookId);
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // 在這裡將編輯的內容保存到適當的地方，例如 API 或本地狀態
    // props.onSave({
    //   title: editedTitle,
    //   author: props.author,
    //   creationDate: props.creationDate,
    //   summary: editedSummary,
    // });
    if (props.handleSaveTitle) {
      props.handleSaveTitle(editedTitle);
    }
    setIsEditing(false);
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
        { <Button
          variant={isLiked ? "danger" : "outline-danger"}
          onClick={handleLikeClick}
        >
          <CgHeart /> &nbsp; {likeCount}
        </Button> }
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
