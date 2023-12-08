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
import { AiFillCaretRight } from "react-icons/ai";

import getImage from './api/get-image';
import getText from './api/get-text';

function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  // const [picture, setPicture] = useState(props.picture);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

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

  // New function to interact with chat-gpt API
  const getChatGPTResponseImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Replace with your API endpoint
    //const apiUrl = "/api/get-image";

    try {
      const data = await getImage(prompt);
      if (data == "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg") {
        throw new Error("Error fetching data from chat-gpt API");
      }
      setAnswer(data);
      setIsLoading(false);
      // Handle the response data as needed
      console.log("ChatGPT Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getChatGPTResponseText = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await getText(prompt);
      if (data == "Invalid prompt provided.") {
        throw new Error("Error fetching data from chat-gpt API");
      }
      setAnswer(data);
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
      <form className="our-form" onSubmit={getChatGPTResponseImage}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <button className="prompt-button">Go!</button>
      </form>
      <form className="our-form" onSubmit={getChatGPTResponseText}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <button className="prompt-button">Go!</button>
      </form>

      {isLoading && <div className="loading-spinner"></div>}

      {isLoading === false && <img src={answer} />}
    </Card>
  );
}

export default Book;
