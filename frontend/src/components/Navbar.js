import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineFolderAdd,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import axios from "axios";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  
  let login = localStorage.getItem("access_token");

  const logout = () => {
    var access_token = "";
    access_token = localStorage.getItem("access_token");
    axios.post('https://web-app-backend-r3ac.onrender.com/logout', null,{ headers: {Authorization : `Bearer ${access_token}`}})
      .then(res => {
        console.log(res.data);
        window.open('/', '_self');
      })
      .catch(error => {

        console.error('Error:', error);
      });
      // setLogin(true);
      // window.open('/', '_blank');
      localStorage.clear();
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          PixieTales.ai
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ChooseStyle"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFolderAdd style={{ marginBottom: "2px" }} /> Create
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/library"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Library
              </Nav.Link>
            </Nav.Item>

            {login !== null && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/mystory"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  My Story
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item className="fork-btn">
              {login === null ? <Button
                href="/login"
                className="fork-btn-inner"
                // onClick={() => setLogin(false)}
              >Login/Signup
              </Button>
              :
              <Button
                onClick={logout}
                // href="/"
                className="fork-btn-inner"
              >Logout
              </Button>}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
