import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-column w-100">
      <div
        style={{ backgroundColor: "#ffdd86", borderTopRightRadius: "20px" }}
        className="p-5 d-flex justify-content-around align-items-center"
      >
        <div className="d-flex align-items-center p-5">
          <div
            className="rounded-circle"
            style={{ width: "50px", height: "50px", backgroundColor: "black" }}
          ></div>
          <div className="d-flex flex-column justify-content-start px-3">
            <h5>000-0000-0000</h5>
            <h5>correo@prueba.com</h5>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start px-3">
          <h5>Instagram</h5>
          <h5>Facebook</h5>
          <h5>Twiter</h5>
        </div>
      </div>
      <div
        className="w-100 d-flex justify-content-center text-white"
        style={{ backgroundColor: "#782d2a" }}
      >
        <h4>Copyright</h4>
      </div>
    </div>
  );
};

export default Footer;
