import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); 
  };
 
  return (
    <div className="Navbar">
      <div className="header1">
        <div className="icon1">
          <img src="/svg/Menu.svg" alt="" />
        </div>
        <div className="logo" />
        <img
          src="/svg/logo.svg"
          alt="Logo"
          style={{ width: 90 + "px", marginTop: "-5px" }}
        />
        <span className="country">VN</span>
      </div>
      <div className="search">
      <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <img src="/svg/loupe.svg" alt="" />
          </button>
        </div>
        <button className="micro" alt="">
          <img src="/svg/microphone.png" alt="" />
        </button>
      </div>
      <div className="header-right">
        <div className="camera" />
        <img src="/svg/createvid.svg" alt="" />
        <div className="bell" />
        <img src="/svg/bell.svg" alt="" />
        <div className="avatar"></div>
      </div>
    </div>
  );
};

export default Navbar;
