import React from "react";
import { useState } from "react";
import BackgroundDots from "./BackgroundDots";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    password: "",
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
        <h3 className="m-0 mt-4" style={{ fontSize: "20px" }}>
          Registrar usuario
        </h3>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5 position-relative">
        <BackgroundDots className="top-0 end-0" />
        <BackgroundDots className="bottom-0 start-0" />
        <div className="w-50">
          <label htmlFor="" className="font-weight-bold">
            Correo
          </label>
          <input
            onChange={handleChange}
            value={data.email}
            type="text"
            name="email"
            className="w-100 mt-1 rounded"
          />
        </div>
        <div className="w-50 mt-3">
          <label htmlFor="" className="font-weight-bold">
            Nombre
          </label>
          <input
            onChange={handleChange}
            value={data.name}
            type="text"
            name="name"
            className="w-100 mt-1 rounded"
          />
        </div>
        <div className="w-50 mt-3">
          <label htmlFor="" className="font-weight-bold">
            Telefono
          </label>
          <input
            onChange={handleChange}
            value={data.phone}
            type="text"
            name="phone"
            className="w-100 mt-1 rounded"
          />
        </div>
        <div className="w-50 mt-3">
          <label htmlFor="" className="font-weight-bold">
            Ciudad
          </label>
          <input
            onChange={handleChange}
            value={data.city}
            type="text"
            name="city"
            className="w-100 mt-1 rounded"
          />
        </div>
        <div className="w-50 mt-3">
          <label htmlFor="" className="font-weight-bold">
            Contraseña
          </label>
          <input
            onChange={handleChange}
            value={data.password}
            type="text"
            name="password"
            className="w-100 mt-1 rounded"
          />
        </div>
        <button className="mt-5 border-0 rounded py-2 px-3 text-white bg-warning">
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Register;
