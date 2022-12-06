import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { FormattedMessage } from "react-intl";

function AddReviewRestaurant() {
  const [data, setData] = useState({
    score: 0,
    description: "",
  });

  const handleButton = () => {
    console.log("Button clicked ...");
  };

  return (
    <>
      <form>
        <div class="form-group row">
          <label for="inputDescription" class="col-sm-2 col-form-label">
          <FormattedMessage id="Opinion" />
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputDescription"
              placeholder="Description"
            ></input>
          </div>
        </div>
      </form>
      <div class="rate  py-3 mt-3">
        <h6 class="mb-0">Califica el restaurante</h6>
          <div class="rating"> <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
          </div>
          {/**esto todavía está decorativamente, hay que hacer que funcione */}
      </div>
      <template>
        <div>
          <b-form-rating v-model="value"></b-form-rating>
          {/* <p class="mt-2">Value: {{ value }}</p> */}
        </div>
      </template>
      {/*
    <script>
      export default {
         data() {return { value: null }} 
      }
    </script>
    */}
      <button type="button" class="btn btn-danger">
      <FormattedMessage id="Add" />
      </button>
    </>
  );
}

export default AddReviewRestaurant;
