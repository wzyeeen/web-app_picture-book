import React, { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import story from "../../Assets/story.jpg";
import back from "../../Assets/back.png";
import next from "../../Assets/next.png";
import Button from "react-bootstrap/Button";
import IconButton from '@mui/joy/IconButton';
import { CgPen } from "react-icons/cg";
import Textarea from '@mui/joy/Textarea';
import { AiFillCaretRight } from "react-icons/ai";

function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  // const [picture, setPicture] = useState(props.picture);
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
      setEditedContent('Your story content ' + newPage);
      setPage(newPage);
      setAnswer(answer);
    }
  }

  const handleNextPage = () => {
    if (page < 8) {
      let newPage = page + 1;
      setEditedContent('Your story content ' + newPage);
      setPage(newPage);
      setAnswer(answer);
    }
  }

  // New function to interact with chat-gpt API
  const getChatGPTResponse = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Replace with your API endpoint
    const apiUrl = "/api/get-image";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: prompt })
      });

      if (!response.ok) {
        throw new Error("Error fetching data from chat-gpt API");
      }

      const data = await response.json();
      setAnswer(data.text);
      setIsLoading(false);
      // Handle the response data as needed
      console.log("ChatGPT Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleChange = (e) => {
    setPrompt(e.target.value);
  }

  return (
    <Card className="book-card-view" orientation="horizontal">
      <CardOverflow>
        <IconButton onClick={handlePreviousPage} style={{backgroundColor: 'transparent'}}>
          <img src={back} alt={back} width='70px' height='70px' />
        </IconButton>
        <AspectRatio ratio="1" sx={{ width: 600, margin: '0 16px' }}>
          <img
            src={story}
            alt={story}
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
            {editedContent}
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
      <form className="our-form" onSubmit={getChatGPTResponse}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <Button className="prompt-button">Go!</Button>
      </form>

      <IconButton onClick={handleNextPage} style={{backgroundColor: 'transparent'}}>
        <img src={next} alt={next} width='70px' height='70px' />
      </IconButton>

      {isLoading && <div className="loading-spinner"></div>}

      {isLoading === false && <img src={answer} />}

    </Card>
  );
}

export default Book;
