import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Type from "./Type.jsx";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Aravind P</b>
          </h1>
          <Type />
          <NavLink to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </NavLink>

          <NavLink to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </NavLink>
        </div>
        <img className="Avatar" src={Avatar} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
