import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="header-bg fixed-top">
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-dark">

          <a class="navbar-brand navber-name" href="/#home">Abdullah Al Masud</a>
       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-light"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

          </ul>
          <ul class="navbar-nav mr-auto">

          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#home">Home</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#about">About</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light " href="/#resume">Resume</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#projects">Projects</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#services">Services</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#blogs">Blogs</a>
            </li>
            <li class="nav-item fw-bold px-2">
              <a class="nav-link text-light" href="/#connect-us">Connect Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Header;