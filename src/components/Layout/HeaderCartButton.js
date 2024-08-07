import React,{useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from './HeaderCartButton.module.css';



const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.item.reduce((currentValue ,i)=>{
        return +(i.amount) + currentValue
    },0);
    return(
        <button className={classes.button} type="button" onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;