import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { FormattedMessage } from "react-intl";

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
                <label for="inputName" class="col-sm-2 col-form-label"><FormattedMessage id="Name" /></label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName" placeholder="Nombre del plato"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputDescription" class="col-sm-2 col-form-label"><FormattedMessage id="Description" /></label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputDescription" placeholder="Descripcion del plato"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label"><FormattedMessage id="TotalPrice" /></label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPrice" placeholder="Precio del plato"></input>
                <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputImage" class="col-sm-2 col-form-label"><FormattedMessage id="Image" /></label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputImage" placeholder="Imagen del plato"></input>
                </div>
            </div>
        </form>
        <button type="button" class="btn btn-danger"><FormattedMessage id="Add" /></button>
        </>
    );
}

export default AddPlate;