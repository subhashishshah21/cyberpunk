import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";
export const PunkList = ({ punkListData, setselectedPunk }) => {
  return (
    <div>
      <div className="punkList">
        {punkListData.map((punk) => (
          <div onClick={() => setselectedPunk(punk.token_id)}>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
