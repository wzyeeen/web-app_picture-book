import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgHeart, CgPen } from "react-icons/cg";
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';

function StyleCards(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedSummary, setEditedSummary] = useState(props.summary);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
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
    if (props.handleSaveSummary) {
      props.handleSaveSummary(editedSummary);
    }
    setIsEditing(false);
  };

  return (
    <Card className="book-card-view">
      <Card.Body>
        <Card.Title>
          Three Little Pigs
          {/* {isEditing ? (
            <Input
              type="text"
              variant="outlined"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            props.title
          )} */}
        </Card.Title>
        <Card.Text>
          Authur:
          {
            props.author
          }
        </Card.Text>
        <Card.Text>
          Create Date: 2023/12/11
        </Card.Text>
        <Card.Text>
          Summary: Three Little Pigs
          {/* {isEditing ? (
            <Textarea name="Soft" placeholder="Type in here…" variant="outlined"
              value={editedSummary}
              onChange={(e) => setEditedSummary(e.target.value)}
            />
          ) : (
            props.summary
          )} */}
        </Card.Text>
        <Button
          variant={isLiked ? "danger" : "outline-danger"}
          onClick={handleLikeClick}
        >
          <CgHeart /> &nbsp; {likeCount}
        </Button>
        {/* <Button
          variant="primary"
          onClick={isEditing ? handleSaveClick : handleEditClick}
          style={{ marginLeft: "10px" }}
        >
          <CgPen /> &nbsp; {isEditing ? "Save" : "Edit"}
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default StyleCards;
