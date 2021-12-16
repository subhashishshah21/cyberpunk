import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collection-card">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">.#{id}</div>
        </div>
        <div className="price-container">
          <img src={weth} alt="wethImage" className="wethImage" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
