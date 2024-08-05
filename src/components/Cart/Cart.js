import React from "react";
import classes from './Cart.module.css'

import Modal from "../UI/Modal";

const Cart = (props)=>{
    const cartItem = (<ul className={classes['cart-items']}>
        {
            [{id:'c1' ,name:'shushi' , amount:2 ,price:229}].map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })
        }
    </ul>)

    const closeClickHandler = (event)=>{
        props.onClose();
        event.stopPropagation();
    }


    return (
        <Modal>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.7</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeClickHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart;