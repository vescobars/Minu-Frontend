import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import BackgroundDots from "./BackgroundDots";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="w-100 d-flex justify-content-center align-items-center p-5 position-relative"
        style={{ backgroundColor: "#ffdd86" }}
      >
        <BackgroundDots className={"top-0 start-50"} />
        <div
          className="w-100 d-flex justify-content-between align-items-center p-5 position-relative"
          style={{ maxWidth: "1300px" }}
        >
          <div className="d-flex flex-column align-items-start p-5">
            <h2 className="m-0" style={{ fontSize: "100px" }}>
              MinU
            </h2>
            <h4
              className="font-weight-bold text-left"
              style={{ color: "#6a1818", width: "250px", textAlign: "left" }}
            >
              Creamos las mejores experiencias dentro de los restaurantes
            </h4>
            <Link to={"/restaurants"}>
              <button
                className="font-weight-bold border-0 px-3 py-2 text-white"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  backgroundColor: "#6a1818",
                }}
              >
                <FormattedMessage id="ReadMore" />
              </button>
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center p-5">
              <img
                src="https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg"
                alt=""
                style={{ height: "150px", width: "300px", objectFit: "cover" }}
                className="rounded"
              />
            </div>
            <div className="d-flex flex-column align-items-start">
              <img
                src="https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg"
                alt=""
                style={{ height: "150px", width: "300px", objectFit: "cover" }}
                className="rounded"
              />
              <img
                src="https://media.cntraveler.com/photos/5b86ba3bc2ca957cff4b495f/16:9/w_2560%2Cc_limit/La-Colombe-Restaurant_Andrea-van-der-Spuy_2018_La-Colombe-183.jpg"
                alt=""
                style={{ height: "150px", width: "300px", objectFit: "cover" }}
                className="rounded my-4"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to={"/register"}>
        <h1
          className="font-weight-bold border-0 px-3 py-2 text-white mt-5"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "30px",
            fontWeight: "bold",
            backgroundColor: "#FF9C65",
          }}
        >
          <FormattedMessage id="TryNow" />
        </h1>
      </Link>
      <div className="d-flex flex-column w-100 align-items-end text-end align-self-end p-5 position-relative">
        <BackgroundDots className={"top-0 start-0"} />
        <h2>Nuestros Servicios</h2>
        <h5 style={{ color: "#6a1818" }} className="w-50">
          Con nosotros podrás conocer los mejores restaurantes y productos
          cercanos a ti. Además, dentro de los restaurantes podrás acceder al
          menú y hacer tu pedido directamente desde nuestra plataforma.
        </h5>
      </div>
      <div className="d-flex justify-content-around p-5 w-100 position-relative">
        <BackgroundDots className={"bottom-50 start-0"} />
        <BackgroundDots className={"top-50 end-0"} />
        <div className="d-flex flex-column align-items-center">
          <div
            className="my-2 p-5"
            style={{
              backgroundColor: "#fef9ec",
              width: "250px",
              borderRadius: "50px",
            }}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/growth-icon/growth-icon-15.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <h5 className="font-weight-bold">Lealtad</h5>
          </div>
          <h5 style={{ width: "200px", fontSize: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </h5>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div
            className="my-2 p-5"
            style={{
              backgroundColor: "#fef9ec",
              width: "250px",
              borderRadius: "50px",
            }}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/growth-icon/growth-icon-15.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <h5 className="font-weight-bold">Lealtad</h5>
          </div>
          <h5 style={{ width: "200px", fontSize: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </h5>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div
            className="my-2 p-5"
            style={{
              backgroundColor: "#fef9ec",
              width: "250px",
              borderRadius: "50px",
            }}
          >
            <img
              src="https://www.freeiconspng.com/thumbs/growth-icon/growth-icon-15.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <h5 className="font-weight-bold">Lealtad</h5>
          </div>
          <h5 style={{ width: "200px", fontSize: "15px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </h5>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
