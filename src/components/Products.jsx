import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const prodValues = [
  {
    name: "Product",
    review: 5,
    image:
      "https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg",
  },
  {
    name: "Product",
    review: 5,
    image:
      "https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg",
  },
  {
    name: "Product",
    review: 5,
    image:
      "https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg",
  },
  {
    name: "Product",
    review: 5,
    image:
      "https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg",
  },
  {
    name: "Product",
    review: 5,
    image:
      "https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg",
  },
];

const Products = () => {
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100">
      <div
        className="w-100 d-flex flex-column justify-content-center align-items-center py-5"
        style={{ backgroundColor: "#ffdd86" }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#6a1818",
          }}
          className="rounded-circle"
        />
        <h2 className="m-0" style={{ fontSize: "100px" }}>
          MinU
        </h2>
        <input
          onChange={handleChange}
          value={data.name}
          type="text"
          name="name"
          className="w-50 mt-1 p-2 border-0"
          style={{ borderRadius: " 195px" }}
          placeholder="Que quieres comer hoy . . . ."
        />
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center py-4 position-relative">
        <h3 className="font-weight-bold" style={{ fontSize: "40px" }}>
          Productos:
        </h3>
        <div className="container w-100 mt-4">
          <div className="row">
            {prodValues.map((res) => (
              <div className="col col-sm-4">
                <ProductCard product={res} />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bg-warning text-white rounded-circle d-flex justify-content-center align-items-center mx-1"
            style={{ height: "25px", width: "25px" }}
          >
            1
          </div>
          <div
            className="bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center mx-1"
            style={{ height: "25px", width: "25px" }}
          >
            2
          </div>
          <div
            className="bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center mx-1"
            style={{ height: "25px", width: "25px" }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
