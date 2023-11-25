import * as React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Textarea from '@mui/joy/Textarea';

function Create(props) {
    return (
        <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            Enter Your <strong className="purple">Prompt </strong>
          </h1>
          <p className="purple">
            Enter your story prompt in the text box below.
          </p>
          <p className="purple">
            Your prompt must be between 20-1000 characters.
          </p>
          <p className="purple">
            Be sure to include details like names and places for the best results.
          </p>
        <div className="bg-orange-100 bg-opacity-80 self-center flex max-w-full flex-col mt-16 pt-10 pb-12 rounded-2xl">
          <div className="self-stretch flex flex-col items-stretch mt-12 mb-4 px-10 max-md:mt-10 max-md:px-5">
            <div className="flex w-full max-w-full items-stretch gap-1.5 mt-1.5 max-md:justify-center">
                <Textarea name="Soft" variant="soft" required size="lg" minRows={4}
                type="text"
                placeholder="Story Prompt"
                className="form-control border-20 border-solid border-emerald-950 rounded-l-md p-2 flex-grow w-full h-12"
                />
            </div>
            <div className="bg-orange-100 flex shrink-0 h-[140px] flex-col mt-1 rounded-lg border-2 border-solid border-emerald-950" />
            <div className="flex w-[54px] max-w-full items-stretch gap-1.5 mt-1.5 self-end max-md:justify-center">
              <div className="text-red-600 text-right text-sm leading-5 whitespace-nowrap">0/1000</div>
            </div>
            <Button 
            as={Link}
            to="/ChooseStyle"
            className="text-slate-400 text-center text-base leading-6 whitespace-nowrap border-slate-300 bg-green-500 w-[110px] max-w-full items-center mt-5 px-5 py-4 rounded-full border-2 border-solid self-end"
                //點擊後跳轉至ChooseStyle
            >
              Submit
            </Button>
          </div>
        </div>
    </Container>
    </Container>
    );
}

export default Create;