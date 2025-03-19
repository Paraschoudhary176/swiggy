import React from "react";

const Header = () => {
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
