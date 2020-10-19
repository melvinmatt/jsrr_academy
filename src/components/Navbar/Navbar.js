import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <a to="/home" className="active">
        home
      </a>
      <a to="/about">About Us</a>
      <a to="/about">Gallery</a>
      <a to="/about">contact us</a>
      <a to="javascript:void(0);" className="icon" onClick="myFunction()">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;
