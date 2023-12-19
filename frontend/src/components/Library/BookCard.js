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
import axios from 'axios';

function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const [picture, setPicture] = useState(props.picture);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [pages, setPages] = useState([]);
  const [pageText, setPageText] = useState("");
  const [pageNum, setPageNum] = useState(1);

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

  const findPageText = (n) => {
    for (let p = 1; p <= pages.length; p++) {
      if (pages[p - 1].page_number == n) {
        return pages[p - 1].text;
      }
    }
  }

  React.useEffect(() => {
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book/" + props.id)
      .then((res) => {
        console.log(res.data);
        setPages(res.data['pages']);
        /*setPageText(res.data['pages'][0].text);*/
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    let firstPageText = findPageText(1);
    setPageText(firstPageText);
  }, [pages]);

  const handlePreviousPage = () => {
    if (pageNum > 1) {
      let newPageNum = pageNum - 1;
      let newText = findPageText(newPageNum);
      setPageText(newText);
      setPageNum(newPageNum);
    }
  }

  const handleNextPage = () => {
    if (pageNum < 8) {
      let newPageNum = pageNum + 1;
      let newText = findPageText(newPageNum);
      setPageText(newText);
      setPageNum(newPageNum);
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
            {pageNum} {/* Here you might dynamically calculate or use another way to get the page number */}
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
            {pageText}
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
