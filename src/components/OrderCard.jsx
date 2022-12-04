import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
const OrderCard = (props) => {
    return (
        <div class="card"
            style={{
                height: "140px",
                float: "left",
                borderStyle: "groove",
                borderRadius: "8px",
                marginLeft: "8px",
                width: "150px",
            }}>
        <h3>
          <a href="/report">
            <FormattedMessage id="Order"/>{props.id}</a>
        </h3>
        <p style={{color:"rgb(91, 141, 17)"}}>
          {props.state}
        </p>
        <p style={{ width: "130px", overflowWrap: "break-word", wordWrap: "break-word", wordBreak: "break-word", textAlign: "center", alignSelf:"center"}}>
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