import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";



export function Order(props){
    const [quantity,setQuantity] = useState(props.quantity);

    const handleIncrement = () =>{
        console.log("Increment...");
        setQuantity(quantity + 1);
    };

    const handleDecrement = () =>{
        console.log("Decrement...");
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(0);
        }
    };

    const renderQuantity = () =>{
        return quantity;
    };

    return(
        <div className="post">
            <h2>{props.name}</h2>
            <div>
                <Button className='btn btn-primary btn-sm' onClick={handleIncrement}>+</Button>
                <h3>{renderQuantity}</h3>
                <Button className='btn btn-secondary btn-sm' onClick={handleDecrement}>-</Button>
            </div>      
            <h3>${props.price}</h3>      
        </div>
    )
}

