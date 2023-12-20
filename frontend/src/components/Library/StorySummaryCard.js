import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgHeart, CgPen } from "react-icons/cg";
import Textarea from '@mui/joy/Textarea';
import Input from '@mui/joy/Input';
import axios from 'axios';

function StyleCards(props) {
  const handleFirstRender = React.useRef(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.thumbs);
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

  React.useEffect(() => {
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book/" + props.id)
      .then((res) => {
        console.log(res.data);
        setLikeCount(parseInt(res.data['thumb']));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (handleFirstRender.current) {
      if (isLiked) {
        axios.post("https://web-app-backend-r3ac.onrender.com/thumb/" + props.id, null, {headers: {Authorization: `Bearer ${access_token}`,},})
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.error('Error:', error)
          });
      } else {
        if (likeCount > 0) {
          axios.post("https://web-app-backend-r3ac.onrender.com/cancelthumb/" + props.id, null, {headers: {Authorization: `Bearer ${access_token}`,},})
            .then(res => {
              console.log(res.data);
            })
            .catch(error => {
              console.error('Error:', error)
            });
        }
      }
      return;
    }
    handleFirstRender.current = true;
  }, [isLiked]);

  return (
    <Card className="book-card-view">
      <Card.Body>
        <Card.Title>
          {/* {props.title} */}
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
          Author:
          {
            props.author
          }
        </Card.Text>
        <Card.Text>
          Create Date:
          {props.createDate}
        </Card.Text>
        <Card.Text>
          {/*"Summary: " + props.title*/}
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
          <CgHeart /> &nbsp;{likeCount}
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
