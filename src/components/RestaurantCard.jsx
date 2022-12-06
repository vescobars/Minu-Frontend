import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      className="d-flex flex-column justify-content-end position-relative rounded mb-4 p-2"
      style={{
        backgroundImage: "url('https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg')",
        backgroundSize: "cover",
        height: "150px",
        backgroundPosition: "center",
      }}
    >
      <h4 className="text-white z-index-1">{restaurant.chainName}</h4>
    </div>
  );
};

export default RestaurantCard;
