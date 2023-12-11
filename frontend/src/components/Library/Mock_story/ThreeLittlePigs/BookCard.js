import React, { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Button from "react-bootstrap/Button";
import IconButton from '@mui/joy/IconButton';
import { CgPen } from "react-icons/cg";
import Textarea from '@mui/joy/Textarea';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";


function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const [picture, setPicture] = useState(props.picture);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [page, setPage] = useState(1);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Save the edited content to the appropriate location (e.g., API or local state)
    // props.onSave({
    //   content: editedContent,
    //   picture: props.picture,
    // });
    if (props.handleSaveCintent) {
      props.handleSaveContent(editedContent);
    }
    setIsEditing(false);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      let newPage = page - 1;
      setEditedContent('Your story content of page ' + newPage);
      setPage(newPage);
      setAnswer(answer);
    }
  }

  const handleNextPage = () => {
    if (page < 8) {
      let newPage = page + 1;
      setEditedContent('Your story content of page ' + newPage);
      setPage(newPage);
      setAnswer(answer);
    }
  }

  return (
    <Card className="book-card-view" orientation="horizontal">
      <CardOverflow>
        <IconButton onClick={handlePreviousPage} style={{ backgroundColor: 'transparent' }}>
          <AiFillCaretLeft size={40} color="green" />
          {/* <img src={back} alt={back} width='70px' height='70px' /> */}
        </IconButton>
        <AspectRatio ratio="1" sx={{ width: 600, margin: '0 16px' }}>
          <img
            src={picture}
            alt={picture}
          />
        </AspectRatio>
        <div style={{ position: 'absolute', bottom: '8px', right: '-530px', color: 'white' }}>
          <Typography variant="caption" fontWeight="md" textColor="success.plainColor">
            {page} {/* Here you might dynamically calculate or use another way to get the page number */}
          </Typography>
        </div>
      </CardOverflow>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isEditing ? (
          <Textarea
            name="Soft"
            marginBottom="100px"
            placeholder="Type in here…"
            variant="outlined"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <Typography fontWeight="md" textColor="success.plainColor">
            Once upon a time, three little pigs named Max, Bella, and Oliver lived in a small village. They decided to build houses, with Max choosing straw, Bella opting for sticks, and Oliver going for bricks.
          </Typography>
        )}
      </CardContent>
      {/* <Button
        variant="primary"
        onClick={isEditing ? handleSaveClick : handleEditClick}
        style={{ marginLeft: "10px", marginBottom: "600px" }}
      >
        <CgPen /> &nbsp; {isEditing ? "Save" : "Edit"}
      </Button> */}

      <IconButton onClick={handleNextPage} style={{ backgroundColor: 'transparent' }}>
        <AiFillCaretRight size={40} color="green" />
        {/* <img src={next} alt={next} width='70px' height='70px' color="green" /> */}
      </IconButton>

      {isLoading && <div className="loading-spinner"></div>}

      {/* {isLoading === false && <img src={answer} />} */}

    </Card>
  );
}

export default Book;
