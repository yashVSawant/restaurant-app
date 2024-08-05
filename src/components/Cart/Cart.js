import React,{useContext} from "react";
import classes from './Cart.module.css';

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;

    const minusHandler = (key)=>{
        return ()=>{
            cartCtx.removeItem(key)
        }
    }
    const plusHandler = (item)=>{
        return ()=>{
            cartCtx.addItem(item)
        }
    }


    const cartItem = (<ul className={classes['cart-items']}>
        {
            cartCtx.item.map((item)=>{
                return <li key={item.id} className={classes['cart-items']}>
                    <div>
                        <h3>{item.name}</h3>
                        <div>
                            <p>{item.price}</p>
                            <div>{item.amount}</div>
                        </div>
                    </div>
                    <div>
                        <button onClick={minusHandler(item.id)}>-</button>
                        <button onClick={plusHandler(item)}>+</button>
                    </div>
                    
                </li>
            })
        }
    </ul>)

    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart;