import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import OrderCard from "./OrderCard";


export default function Orders(props) {
    const [data, setData] = useState({
        name: "",
    });

    const [orders, setOrders] = useState([]);

    const handleChange = (e) => {
        setOrders((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const orderInfo = {
            orderId: orders.orderId,
            orderState: orders.orderState,
            orderDate: orders.orderDate,
            orderPrice: orders.orderPrice,
        }

        fetch("/api/v1/orders", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
    }

    
    return(
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                {orders.map((ord) => (
                <div className="col col-sm-4">
                    <OrderCard order={ord} />
                </div>
                ))}
            </div>    
        </div>
    );

    
}