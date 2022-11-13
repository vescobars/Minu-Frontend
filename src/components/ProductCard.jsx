import { Rating } from "@mui/material";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="d-flex flex-column justify-content-end position-relative rounded mb-4 p-2 w-100">
      <img className="w-100 rounded" src={product.image} alt="" />
      <h4 className="z-index-1">{product.name}</h4>
      <Rating name="read-only" value={product.review} readOnly />
      <button
        className="mt-3 border-0 rounded py-2 px-3 text-white bg-warning"
        style={{ width: "max-content" }}
      >
        Crear promoción
      </button>
    </div>
  );
};

export default ProductCard;
