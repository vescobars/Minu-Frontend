import React from "react";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

import ReportDetail from "./ReportDetail";
import { Row, Col } from "react-bootstrap";

function Report() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRest, setSelectedRest] = useState([]);

  useEffect(() => {
    console.log(restaurants)
    if(!navigator.onLine){
      if(localStorage.getItem("restaurants") === null){
        setRestaurants([])
      } else {
        setRestaurants(localStorage.getItem("restaurants"));
      }
    } else {
      const URL = "http://localhost:3000/api/v1/sites";
      fetch(URL).then((data) => data.json()).then((data) => {
        setRestaurants(data);
        localStorage.setItem("restaurants", data);
      }) 
    }
  }, [selectedRest]);

  if (restaurants.length == 0){
    return null
  }

  const selectDetail = (restaurant) => {
    setSelectedRest(restaurant)
  }

  return (
    <>
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
          <h3 className="m-0 mt-4" style={{ fontSize: "20px" }}>
            <FormattedMessage id="Report"/>
          </h3>
        </div>
      <div>
        <h2>
          <FormattedMessage id="SelectRestaurant"/>
        </h2>
        {/* <select id="restaurantReport">
          {restaurants.map(res => (
              <option value={res.id}>{res.description}</option>
            ))}
        </select> */}
        <div style={{overflowX: "auto"}}>
          <Row>
          {restaurants?.map(res => (
              <Card style={{cursor: "pointer", width:"auto"}} onClick={selectDetail.bind(this, res)}>
                <Card.Body>
                  <Card.Title >{res.description}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </div>
      </div>
      <hr></hr>
      <ReportDetail Restaurant={selectedRest} />
    </>
  );
}

export default Report;
