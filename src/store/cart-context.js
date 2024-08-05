import React from "react";

const CartContext  = React.createContext({
        item:[],
        totalAmount:0,
        addItem:(item)=>{
            console.log(item)
        },
        removeItem:(id)=>{}
    });

export default CartContext;