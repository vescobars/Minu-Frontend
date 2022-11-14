import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function AddPlate(){

    const [data, setData] = useState({
        name: "",
        description: "",
        value: 0,
        notes: "",
      });

    const handleButton = () => {
        console.log("Button clicked ...")
    }

    return (
        <>
        <form>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName" placeholder="Plato"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputDescription" class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDescription" placeholder="Plato"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Precio</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPrice" placeholder="Plato"></input>
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImage" class="col-sm-2 col-form-label">Imagen</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputImage" placeholder="Imagen"></input>
                </div>
            </div>
        </form>
        <button type="button" class="btn btn-danger">Añadir restaurante</button>
        </>
    );
}

export default AddPlate;