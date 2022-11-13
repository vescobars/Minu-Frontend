import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      className="d-flex flex-column justify-content-end position-relative rounded mb-4 p-2"
      style={{
        backgroundImage: `url('${restaurant.image}')`,
        backgroundSize: "cover",
        height: "150px",
        backgroundPosition: "center",
      }}
    >
      <h4 className="text-white z-index-1">{restaurant.name}</h4>
      <h5 className="text-white z-index-1">{restaurant.price}</h5>
    </div>
  );
};

export default RestaurantCard;
