import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import darkMode from "../assets/header/theme-switch.png";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>
      <div className="search-bar">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Collection, item or user ..."
        />
      </div>
      <div className="header-items">
        <p>Drops</p>
        <p>Market Place</p>
        <p>Create</p>
      </div>
      <div className="header-actions">
        <div className="theme-switch-container">
          <img src={darkMode} alt="" />
        </div>
      </div>
      <div className="login-btn">GET IN</div>
    </div>
  );
};
