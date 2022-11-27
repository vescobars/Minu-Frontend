import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
const OrderCard = (props) => {
    return (
        <div class="card"
            style={{
                height: "120px",
                float: "left",
                borderStyle: "groove",
                borderRadius: "8px",
                marginLeft: "8px",
                width: "150px",
            }}>
        <h3>
          <a href="/report">
            <FormattedMessage id="Order"/> {props.id}</a>
        </h3>
        <p style={{color:"rgb(91, 141, 17)"}}>
          <FormattedMessage id={props.state}/>
        </p>
        <p>
        <FormattedDate
          value={new Date(props.date)}
          year='numeric'
          month='long'
          day='numeric'
        /></p>
      </div>
    );
  };
  
  export default OrderCard;