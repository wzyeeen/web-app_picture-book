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
import Box from '@mui/joy/Box';

import getImage from './api/get-image';
import getText from './api/get-text';
import { updatePage } from './api/get-book-info';

function Book(props) {
  //console.log(props);
  const pageFind = (pageNum) => {
    return props.pages.find(item => item.page_number === pageNum);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(pageFind(1).text);
  const [picture, setPicture] = useState(pageFind(1).image_url);
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
      setPage(newPage);
      setEditedContent(pageFind(newPage).text);
      setPicture(pageFind(newPage).image_url);
      setAnswer(answer);
    }
  }

  const handleNextPage = () => {
    if (page < 8) {
      let newPage = page + 1;
      setPage(newPage);
      setEditedContent(pageFind(newPage).text);
      setPicture(pageFind(newPage).image_url);
      setAnswer(answer);
    }
  }

  const handleSavePage = async () => {
    console.log("handleThisPageSave " + pageFind(page).id);
    console.log("Content:" + editedContent);
    console.log("img url:" + picture);
    setIsLoading(true);
    updatePage(pageFind(page).id, editedContent, picture);
    setIsLoading(false);
    console.log("replace page complete!");
    
  };

  // New function to interact with chat-gpt API
  const getChatGPTResponseImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await getImage(prompt);
      if (data == "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg") {
        throw new Error("Error fetching data from chat-gpt API");
      }
      setAnswer(data);
      setIsLoading(false);
      // Handle the response data as needed
      console.log("ChatGPT Response:", data);
      setPicture(data);
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
      setEditedContent(data);
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
      <Box sx={{ border: '1px solid #ccc', height: '600px', width: '500px', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CardContent sx={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
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
      </Box>
      <Button
        variant="primary"
        onClick={isEditing ? handleSaveClick : handleEditClick}
        style={{ marginLeft: "10px", marginBottom: "600px" }}
      >
        <CgPen /> &nbsp; {isEditing ? "Save" : "Edit"}
      </Button>

      <IconButton onClick={handleNextPage} style={{ backgroundColor: 'transparent' }}>
        <AiFillCaretRight size={40} color="green" />
        {/* <img src={next} alt={next} width='70px' height='70px' color="green" /> */}
      </IconButton>

      {isLoading && <div className="loading-spinner"></div>}

      {/* {isLoading === false && <img src={answer} />} */}
      <CardContent>
        <form className="our-form" onSubmit={getChatGPTResponseText}>
          <label>Generate Text</label>
          <input className="prompt-field" type="text" onChange={handleChange} />
          <button className="prompt-button">Go!</button>
        </form>
        <form className="our-form" onSubmit={getChatGPTResponseImage}>
          <label>Generate Image</label>
          <input className="prompt-field" type="text" onChange={handleChange} />
          <button className="prompt-button">Go!</button>
        </form>
        <button onClick={handleSavePage}>Click to apply page changes</button>
      </CardContent>
    </Card>
  );
}

export default Book;