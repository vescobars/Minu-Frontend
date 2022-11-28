import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import OrderCard from "./OrderCard";


export default function Orders(props) {
    const[data, setData] = useState({
        orderId: "",
        orderState: "",
        orderDate: "",
        orderPrice: "",
    });

    const [orders, setOrders] = useState([]);

    useEffect(
        () => {
            const URL = "http://localhost:3000/orders";
            fetch(URL)
                .then((data) => data.json())
                .then((data) => {
                    setOrders(data);
                });
        },
        []
    );

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

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