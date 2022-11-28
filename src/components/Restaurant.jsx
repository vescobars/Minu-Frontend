import React from "react"
import { useState } from 'react';
import StarRatings from './react-star-ratings';

export default function Restaurant(props) {
    const handleCart = () =>{
        console.log("Cart...");//Open the cart 
    };

    //Consider creating a component for this(makes sense taking into account the filter tag, probably will have to put variables to handdle that)
    
    return ( 
        <div>
            <div style={{backgroundImage: ulr(props.image)}}>
                <h1>props.name</h1>
                <h2>props.address</h2>
                <StarRatings rating={props.rating} starDimension="40px" starSpacing="15px"></StarRatings>
                <div>
                    {Object.keys(props.tags).map(key => <Tag>{key}:{props.tags[key]}</Tag>)}//TODO: Add tags(componente de otra persona)
                </div>
            </div>
            <div>
                <div>
                    {Object.keys(props.filterTags).map(key => <Tag>{key}:{props.filterTags[key]}</Tag>)}//TODO: Add tags(componente de otra persona)
                </div>
                <div>
                    
                    {Object.keys(props.plates).map(key => <Plate>{key}:{props.plates[key]}</Plate>)}//TODO: Add plates(componente de otra persona). Como pongo esto en un grid wdth=3?
                </div>
            </div>            
        </div>
     );
}
