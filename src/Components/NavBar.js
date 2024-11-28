import React from "react";
import App from "../App";

const NavBar = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      />
      <title>Olympia Navbar</title>

      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section">
          <h1 className="main-heading">OLYMPIA</h1>
          <p className="sub-heading">Gateway to Cinema World</p>
        </div>

        {/* Menu Section */}
        <ul className="menu-section">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#about">TV Show</a>
          </li>
          <li>
            <a href="#contact">New &amp; Popular</a>
          </li>
          <li>
            <a href="#mylist">My List</a>
          </li>
        </ul>

        {/* Buttons Section */}
        <div className="buttons-section">
          <i className="bx bx-search" />
          <div className="dropdown">
            <i className="bx bxs-grid" />
            <div className="dropdown-content">
              <a href="#action">Action</a>
              <a href="#comedy">Comedy</a>
              <a href="#documentary">Documentary</a>
              <a href="#anime">Anime</a>
              <a href="#drama">Drama</a>
              <a href="#fantasy">Fantasy</a>
              <a href="#horror">Horror</a>
              <a href="#kids">Kids</a>
              <a href="#romance">Romance</a>
              <a href="#sci-fi">Science Fiction</a>
            </div>
          </div>
          <i className="bx bxs-user-circle" />
          <button className="user-button">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
