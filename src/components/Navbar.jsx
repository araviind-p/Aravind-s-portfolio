import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import {  CgPhone } from "react-icons/cg";
import Logo from "../images/Photo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menu-on-mobile" onClick={toggleMobileMenu}>
        {isMobileMenuVisible ? <RxCross1 /> : <CiMenuBurger />}
      </div>
      <ul
        className={`nav-links ${isMobileMenuVisible ? "mobile-visible" : ""}`}
      >
        <li>
          <NavLink to="/" className="nav-link" onClick={toggleMobileMenu}>
            <AiOutlineHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-link" onClick={toggleMobileMenu}>
            <BsPerson /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Project"
            className="nav-link"
            onClick={toggleMobileMenu}
          >
            <BsCodeSlash /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className="nav-link"
            onClick={toggleMobileMenu}
          >
            <CgPhone />
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;