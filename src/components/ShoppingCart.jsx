import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Order} from "./Order";

const plates=[
    {name: 'Burger', price: 5.99, quantity:0},
    {name: 'Fries', price: 2.99, quantity:0},
    {name: 'Pepsi', price: 1.99, quantity:0},
    {name: 'Chocolate Cake', price: 2.99, quantity:0},
    {name: 'Ice Cream', price: 1.99, quantity:0},
    {name: 'Salad', price: 3.99, quantity:0},
    {name: 'Steak', price: 9.99, quantity:0},
    {name: 'Chicken', price: 7.99, quantity:0},
];

export default function ShoppingCart(props){
    const[textValue,setTextValue] = useState("Controlled");

    const handleTextChange = (event) =>{
        setTextValue(event.target.value);
    };

    return(
        <div>
            <div>
                <h2>Orders</h2>
                <ul>
                {Object.keys(plates).map(key => <Order>{key} : {plates[key]}</Order>)}
                </ul>
            </div>
            <div>
                <h3>Additional Notes</h3>
                <Box 
                    component="form"
                    sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Additional Notes"
                            multiline
                            rows={4}
                            defaultValue="Notes"
                        />
                    </div>
                </Box>
            </div>
            <div>
                <button className='btn btn-primary btn-lg' type='success'>Confirm</button>
            </div>
        </div>
    );
}