import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const [item, setItem] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);
    
    const addItemHandler = (newItem)=>{
        setItem([...item,newItem])
        
        setTotalAmount(totalAmount + newItem.price)
    }
    const removeItemHandler = (id)=>{
        const amountToReduce = item.filter((i)=>{
            return i.id === id
        }).reduce((currentValue ,i)=>{return currentValue + i.price});

        const filterdItem = item.filter((i)=>{
            return i.id !== id
        })
        
        setItem([...filterdItem]);
        setTotalAmount(totalAmount - amountToReduce)
    }
    const cartContext = {
        item:item,
        totalAmount:totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    


    return (<CartContext.Provider value={cartContext}>
                {props.children}
        </CartContext.Provider>)
}

export default CartProvider;