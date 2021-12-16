import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";
const Main = ({ punkListData, selectedPunk }) => {
  const [active, setActive] = useState(punkListData[0]);
  useEffect(() => {
    setActive(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="img-container">
        <img src={active.image_original_url} className="selectedPunk" alt="" />
      </div>
      <div className="information">
        <div className="header">
          <p className="title">{active.name}</p>
          <span className="id">.#{active.token_id}</span>
        </div>
        <div className="owner-info">
          <img
            className="owner_profilepic"
            src={active.owner.profile_img_url}
            alt=""
          />
          <div>
            <p className="ownerId">{active.owner.address}</p>
            <p className="owner">@Subhashish</p>
          </div>
        </div>
      </div>
      <div className="socialmedia">
        <div></div>
        <div className="media-logo">
          <img src={instagramLogo} alt="" />
          <img src={twitterLogo} alt="" />
          <img src={moreLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
