import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import ReviewCard from "./ReviewCard";
import { FormattedMessage } from "react-intl";

function ReportDetail(props) {
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if(!navigator.onLine){
            if(localStorage.getItem("orders") === null){
                setOrders("Loading...")
            } else {
                setOrders(localStorage.getItem("orders"));
            }
        } else {
            if (typeof props.Restaurant.id !== 'undefined'){
                const ordersURL = "http://localhost:3000/api/v1/sites/"+props.Restaurant.id+"/orders";
                fetch(ordersURL).then((data) => data.json()).then((data) => {
                    setOrders(data);
                    localStorage.setItem("orders", data);
                });
            }
        }
    }, [props]);

    useEffect(() => {
        if(!navigator.onLine){
            if(localStorage.getItem("reviews") === null){
                setReviews("Loading...")
            } else {
                setReviews(localStorage.getItem("reviews"));
            }
        } else {
            if (typeof props.Restaurant.id !== 'undefined'){
                const reviewsURL = "http://localhost:3000/api/v1/sites/"+props.Restaurant.id+"/reviews";
                fetch(reviewsURL).then((data) => data.json()).then((data) => {
                    setReviews(data);
                    localStorage.setItem("reviews", data);
                });
            }
        }
    }, [props]);

    if (typeof props.Restaurant.id == 'undefined'){
        return null
    }

    const getTotalValue = () => {
        let total = 0
        for (let i = 0; i < orders.length; i += 1){
            total += orders[i].totalValue
        }
        return total
    }
        
    return(
        <div>
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
                <div>
                    <FormattedMessage id="OrdersTotal"/> {orders?orders.length:0}
                </div>
                <div>
                    <FormattedMessage id="TotalPrice"/> ${orders?getTotalValue():0}
                </div>
                <div>
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
            <div style={{height: "160px",overflowX: "auto"}}>
                <div style={{ width:"max-content"}}>
                    {orders?.map((order, i) => (
                        <OrderCard id={i} state={order.state} date={order.date} totalValue={order.totalValue}/>
                    ))}
                </div>
            </div>
                        
            <div style={{height: "240px",overflowX: "auto"}}>
                <h2>
                    <FormattedMessage id="Reviews"/>
                </h2>
                <div style={{ width:"max-content"}}>
                    {reviews?.map((review, i) => (
                        <ReviewCard id={i} score={review.score} description={review.description}/>
                    ))}        
                </div>
            </div>

            <button className="mt-2 md-2 border-0 rounded py-2 px-3 text-white" style={{background: "#6A1818"}}>
                <FormattedMessage id="DownloadReport"/>
            </button>
        </div>
    )
}

export default ReportDetail;