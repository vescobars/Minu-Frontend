import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from "./components/Restaurants";
import Products from "./components/Products";
import CreatePromotion from "./components/CreatePromotion";
import Header from "./components/Header";
import NuevoRestaurante from "./components/NuevoRestaurante";
import Reporte from "./components/Reporte";
import NuevaCadena from "./components/NuevaCadena";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    {/* <Register />
    <Restaurants />
    <Products />
    <CreatePromotion />
    <NuevoRestaurante />
    <Reporte />
    <NuevaCadena /> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals( );
