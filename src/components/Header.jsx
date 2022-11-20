import React from "react";
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
            <span className="h5 my-0 text-black text-decoration-none">
              Restaurantes
            </span>
          </Link>
          <Link to={"/register"}>
            <span className="mx-5 h5 my-0 text-black text-decoration-none">
              Promociones
            </span>
          </Link>
          <Link to={"/register"}>
            <span className="h5 my-0 text-black text-decoration-none">
              Nosotros
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
            Log In
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
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;