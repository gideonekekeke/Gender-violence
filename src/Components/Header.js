import React from "react";
import { Link } from "react-router-dom";
import { app } from "../";

function Header() {
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "black",
        color: "white",
        fontFamily: "poppins",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          {" "}
          <div> News Feed</div>
        </Link>

        <Link style={{ textDecoration: "none", color: "white" }} to="/post">
          <div> Make Post</div>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/user">
          <div> Users</div>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
