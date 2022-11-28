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
