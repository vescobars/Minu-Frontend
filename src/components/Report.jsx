import React from "react";
import OrderCard from "./OrderCard";
import ReviewCard from "./ReviewCard";

import { FormattedMessage } from "react-intl";

function Report() {
  return (
    <>
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
            <FormattedMessage id="Report"/>
          </h3>
        </div>
      <div id="Ordenes">
        <h2>
          <FormattedMessage id="Orders"/>
        </h2>
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            margin: "0",
            fontSize:"110%",
            textAlign: "center",
          }}>
          <div >
            <FormattedMessage id="OrdersTotal"/> 10
          </div>
          <div >
            <FormattedMessage id="TotalPrice"/>$99'999.999
          </div>
          <div >
            <FormattedMessage id="Since">{placeholder=>  
              <input style={{width:"100px"}} placeholder={placeholder}/>}
            </FormattedMessage>
            <FormattedMessage id="Until">{placeholder=>  
              <input style={{width:"100px"}} placeholder={placeholder}/>}
            </FormattedMessage>
            <button className="border-0 rounded py-1 px-2 text-white" style={{background: "#6A1818"}}>
              <FormattedMessage id="Apply"/>
            </button>
          </div>
        </div>
        <br></br>

        <div 
          style={{
            height: "140px",
            overflowX: "auto",
          }}>
          <div style={{ width:"max-content"}}>
            <OrderCard id="#1" state="Done" date="2019-03-26"/>
            <OrderCard id="#2" state="Done" date="2019-03-26"/>
            <OrderCard id="#3" state="Done" date="2019-03-26"/>
            <OrderCard id="#4" state="Done" date="2019-03-26"/>
            <OrderCard id="#5" state="Done" date="2019-03-26"/>
            <OrderCard id="#6" state="Done" date="2019-03-26"/>
            <OrderCard id="#7" state="Done" date="2019-03-26"/>
            <OrderCard id="#8" state="Done" date="2019-03-26"/>
            <OrderCard id="#9" state="Done" date="2019-03-26"/>
            <OrderCard id="#10" state="Done" date="2019-03-26"/>
            <OrderCard id="#11" state="Done" date="2019-03-26"/>
          </div>
        </div>
      </div>

      <div id="Reviews">
        <h2>
          <FormattedMessage id="Reviews"/>
        </h2>
        <div 
          style={{
            height: "220px",
            overflowX: "auto",
          }}>
          <div style={{ width:"max-content"}}>
            <ReviewCard score="1" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
            <ReviewCard score="2" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
            <ReviewCard score="3" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
            <ReviewCard score="4" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
            <ReviewCard score="5" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
            <ReviewCard score="5" client="Juan" description="Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas."/>
          </div>
        </div>

        <button className="mt-2 md-2 border-0 rounded py-2 px-3 text-white" style={{background: "#6A1818"}}>
          <FormattedMessage id="DownloadReport"/>
        </button>
      </div>
    </>
  );
}

export default Report;
