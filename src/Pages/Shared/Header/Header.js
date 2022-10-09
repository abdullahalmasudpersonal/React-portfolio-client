import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header-bg fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">

          <a className="navbar-brand navber-name" href="/#home">Abdullah Al Masud</a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <ul className="navbar-nav mr-auto">

          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#home">Home</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#about">About</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light " href="/#resume">Resume</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#projects">Projects</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#services">Services</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#blogs">Blogs</a>
            </li>
            <li className="nav-item fw-bold px-2">
              <a className="nav-link text-light" href="/#connect-us">Connect Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Header;