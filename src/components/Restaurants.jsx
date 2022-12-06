import React, { useEffect } from "react";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [data, setData] = useState({
    name: "",
  });

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3000/api/v1/chains";
    if (!navigator.onLine) {
      if (localStorage.getItem("restaurants") === null) {
        setRestaurants([]);
      } else {
        setRestaurants(localStorage.getItem("restaurants"));
      }
    } else {
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setRestaurants(data);
          localStorage.setItem("restaurants", data);
        });
    }
  }, []);

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
          <FormattedMessage id="YourRestaurants" />
        </h3>
        <div className="container w-100 mt-4">
          <div className="row">
            {restaurants?.map((res) => (
              <div key={res.id} className="col col-sm-4">
                <RestaurantCard restaurant={res} />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="d-flex">
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
        </div> */}
      </div>
    </div>
  );
};

export default Restaurants;
