import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const [item, setItem] = useState([]);
    const [totalAmount , setTotalAmount] = useState(0);
    
    const addItemHandler = (newItem)=>{
        const isPresent = item.find((i)=>i.id === newItem.id)
        if(isPresent){
            isPresent.amount = +isPresent.amount + +newItem.amount
        }else{
            setItem([...item,newItem])
        }
        
        setTotalAmount(totalAmount + newItem.price)
    }
    const removeItemHandler = (id)=>{
        let filterdItem = item;
        const getItem = item.find((i)=>i.id === id)
        if(getItem.amount > 1){
            getItem.amount = +getItem.amount - 1;
        }else{
            filterdItem = item.filter((i)=>{
                return i.id !== id
            })
        }
        const amountAvailable = filterdItem.reduce((currentValue ,i)=>{return currentValue + +i.price},0);
        setItem([...filterdItem]);
        setTotalAmount(amountAvailable)
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