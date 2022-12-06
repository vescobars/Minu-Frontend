import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-3 px-4">
      <div className="d-flex align-items-center">
        <div
          className="rounded-circle me-3"
          style={{ height: "55px", width: "55px", backgroundColor: "#ffdd86" }}
        />
        <Link to={"/"}>
          <h2 className="text-black text-decoration-none">MinU</h2>
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="justify-content-between align-items-center me-5 d-lg-flex d-none">
          
          <Link to={"/restaurants"}>
            <span className="mx-3 h5 my-0 text-black text-decoration-none">
              <FormattedMessage id="Restaurants" />
            </span>
          </Link>
          <Link to={"/create-chain"}>
            <span className="mx-3 h5 my-0 text-black text-decoration-none">
              <FormattedMessage id="addChain" />
            </span>
          </Link>
          <Link to={"/create-restaurant"}>
            <span className="mx-3 h5 my-0 text-black text-decoration-none">
              <FormattedMessage id="addRestaurant" />
            </span>
          </Link>
          <Link to={"/report"}>
            <span className="mx-3 h5 my-0 text-black text-decoration-none">
              <FormattedMessage id="report" />
            </span>
          </Link>
          <Link to={"/qr-reader"}>
            <span className="mx-3 h5 my-0 text-black text-decoration-none">
              <FormattedMessage id="Scan Menu"/>
            </span>
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="font-weight-bold border-0 bg-white px-3 py-2 me-4"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            <FormattedMessage id="LogIn" />
          </button>
          <Link to={"/register"}>
            <button
              className="font-weight-bold border-0 px-3 py-2 text-white"
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "30px",
                fontWeight: "bold",
                backgroundColor: "#FF9C65",
              }}
            >
              <FormattedMessage id="SignUp" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
