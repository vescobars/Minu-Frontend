import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Products from "./components/Products";
import CreatePromotion from "./components/CreatePromotion";
import Register from "./components/Register";
import CreateRestaurant from "./components/CreateRestaurant";
import CreateChain from "./components/CreateChain";
import Report from "./components/Report";
import AddReviewRestaurant from "./components/AddReviewRestaurant";
import AddPlate from "./components/AddPlate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create-promotion" element={<CreatePromotion />} />
          <Route path="/" element={<Restaurants />} />
          <Route path="/create-restaurant" element={<CreateRestaurant />} />
          <Route path="/create-chain" element={<CreateChain />} />
          <Route path="/report" element={<Report />} />
          <Route path="/addReviewRestaurant" element={<AddReviewRestaurant />} />
          <Route path="/addPlate" element={<AddPlate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
