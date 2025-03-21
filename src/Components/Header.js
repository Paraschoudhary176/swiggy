import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState(true);

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "2px solid black",
        padding: "10px 20px",
      }}
    >
      {/* Logo on the left */}
      <div id="logo-container">
        <img
          className="logo"
          src={require("../assets/food.png")}
          style={{ height: 100, width: 100 }}
          alt="logo"
        />
      </div>

      {/* Navigation items on the right */}
      <div className="nav-items">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: 0,
            padding: 0,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About Us
          </Link>
          <Link
            to="/Contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact Us
          </Link>
          <li>Cart</li>
        </ul>
      </div>

      {/* Login Button */}
      <button
        onClick={() => setLoginBtn(!loginBtn)}
        style={{
          height: 30,
          width: 100,
          marginLeft: 10,
        }}
      >
        {loginBtn ? "Logged In" : "Logged Out"}
      </button>
    </div>
  );
};

export default Header;
