import React,{useState} from "react";

import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCartButton.module.css';
import Cart from '../Cart/Cart';



const HeaderCartButton = ()=>{
    const [opneCart , setOpneCart] = useState(false)
    const cartClickHandler = ()=>{
        setOpneCart(true)
    }
    const closeHandler = ()=>{
        setOpneCart(false)
    }
    return(
        <button className={classes.button} type="button" onClick={cartClickHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
            {opneCart && <Cart onClose={closeHandler}/>}
        </button>
    )
}

export default HeaderCartButton;