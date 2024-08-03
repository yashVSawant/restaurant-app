import React from "react";

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ()=>{
    return(
        <button className={classes.button} type="button">
            <span class="fa fa-shopping-cart" className={classes.icon}></span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
                
        </button>
    )
}

export default HeaderCartButton;