import React,{useContext} from "react";
import classes from './MealsForm.module.css';
import CartContext from "../../store/cart-context";

import Input from "../UI/Input";

const MealsForm = (props)=>{
    const cartCtx = useContext(CartContext);
    const addHandler = (event)=>{
        event.preventDefault()
        
        const amount = document.getElementById('amount').value;
        cartCtx.addItem({...props.item,amount:amount })
    }
    return(
        <form>
            <div>
                <Input label="Amount" input={{
                    id:'amount',
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1',
                }}/>
            </div>
            <button className={classes.button} onClick={addHandler}>+Add</button>
        </form>
    )
}

export default MealsForm;