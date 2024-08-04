import React from "react";

import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

import classes from './HeaderCartButton.module.css'



const HeaderCartButton = ()=>{
    const clickHandler = ()=>{
        <Cart/>
    }
    return(
        <button className={classes.button} type="button" onClick={clickHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
                
        </button>
    )
}

export default HeaderCartButton;