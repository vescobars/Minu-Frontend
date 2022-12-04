import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";

function ReportDetail(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        console.log("rd")
        if (typeof props.Restaurant.id !== 'undefined'){
            
            const ordersURL = "/api/v1/sites/"+props.Restaurant.id+"/orders";
            fetch(ordersURL)
            .then((data) => data.json())
            .then((data) => {
            setOrders(data);
            });
        }  
    }, [props]);

    if (typeof props.Restaurant.id == 'undefined'){
        return null
    }
        
    return(
        <div>
            {orders?.map((order, i) => (
                <OrderCard id={i} state={order.state} date={order.date} totalValue={order.totalValue}/>
          ))}
        </div>
    )
}

export default ReportDetail;