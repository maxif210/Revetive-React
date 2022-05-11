import React, { useState } from "react";
import MenuMobile from "./MenuMobile";
import Navbar from "./Navbar";
import imgURL from "../assets/nature.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="brand">
          <span>Reve</span>
          <span className="brand-title-blue">Tive.</span>
        </div>

        {screen.width < "768" ? <MenuMobile /> : <Navbar />}
      </div>

      <div className="imageBackground">
        <div className="heroContainer" >
          <h2 className="subtitle" >Easy way to build perfect Websites</h2>
          <h1 className="title" >Beautify handcrafted tempaltes for your websites</h1>
          <button className="getStarted" >Get Started</button>
        </div>
        {/* <img className="image" src={imgURL} alt="" /> */}
      </div>
    </header>
  );
};

export default Header;
