import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import burgerMenuIcon from "../../../node_modules/bootstrap-icons/icons/list.svg";

const Header = () => {
  return (
    <header>
      <img src={burgerMenuIcon} alt="Menu" />
      <h1>TODO</h1>
      {/* <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link> */}
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
