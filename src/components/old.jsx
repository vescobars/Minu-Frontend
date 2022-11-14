import React, { Component } from 'react';

const Cart = ({orders}) => {

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }
    
    formatPlateItem = (plate) => {
        return (
                <div>
                    <span>{plate.name}</span>
                    <button 
                        onClick={this.handleIncrement}
                        className='btn btn-'>
                    </button>
                </div>
        )
    }

    return (
        <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
            {Object.keys(plates).map(key => <li>{key} : {orders[key]}</li>)}
        </ul>
        </div>
    )


    
}