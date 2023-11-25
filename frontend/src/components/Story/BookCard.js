import React, { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import story from "../../Assets/story.jpg";
import Button from "react-bootstrap/Button";
import { CgPen } from "react-icons/cg";
import Textarea from '@mui/joy/Textarea';

function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const [picture, setPicture] = useState(props.picture);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Save the edited content to the appropriate location (e.g., API or local state)
    // props.onSave({
    //   content: editedContent,
    //   picture: props.picture,
    // });

    setIsEditing(false);
  };

  return (
    <Card className="book-card-view" orientation="horizontal">
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 600, margin: '0 16px' }}>
          <img
            src={story}
            alt={story}
          />
        </AspectRatio>
        <div style={{ position: 'absolute', bottom: '8px', right: '-630px', color: 'white' }}>
          <Typography variant="caption" fontWeight="md" textColor="success.plainColor">
            1 {/* Here you might dynamically calculate or use another way to get the page number */}
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
            {props.content}
          </Typography>
        )}
      </CardContent>
      <Button
        variant="primary"
        onClick={isEditing ? handleSaveClick : handleEditClick}
        style={{ marginLeft: "10px", marginBottom: "600px" }}
      >
        <CgPen /> &nbsp; {isEditing ? "Save" : "Edit"}
      </Button>
    </Card>
  );
}

export default Book;
