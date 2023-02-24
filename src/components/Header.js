import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Color from "../components/NavBar";
import darkModeOn from "../images/darkModeOn.png";
import darkModeOff from "../images/darkModeOff.png";
import { useNavigate } from "react-router";
import "../css/header.css";
import NavBar from "../components/NavBar";
import expandMore from "../images/expandMore.png";
import expandLess from "../images/expandLess.png";

const Header = ({ navBar, setNavBar }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [height, setHeight] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (height > 80) {
    }
  });
  return (
    <>
      <div className="header-wrapper">
        <Navbar
          bg={darkMode ? "dark" : "light"}
          variant={darkMode ? "dark" : "light"}
        >
          <Container>
            <Navbar.Brand href="/">
              <h4>Practice</h4>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Main
              </Nav.Link>
              <Nav.Link
                style={{ display: "flex" }}
                onClick={() => {
                  setNavBar(!navBar);
                }}
              >
                Color
                {navBar ? <img src={expandLess} /> : <img src={expandMore} />}
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/user/login");
                }}
              >
                로그인
              </Nav.Link>
            </Nav>
            <Nav>
              <div
                onClick={() => {
                  let mode = localStorage.getItem("darkmode");
                  if (mode === "true") {
                    setDarkMode(!darkMode);
                    localStorage.setItem("darkmode", false);
                  } else {
                    setDarkMode(!darkMode);
                    localStorage.setItem("darkmode", true);
                  }
                }}
              >
                <Nav.Link>
                  {darkMode ? (
                    <img src={darkModeOn} />
                  ) : (
                    <img src={darkModeOff} />
                  )}
                </Nav.Link>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
