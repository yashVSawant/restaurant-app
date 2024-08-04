import React,{useState} from "react";
import classes from './MealsForm.module.css'

const MealsForm = ()=>{
    const [amount , setAmount] = useState(1);
    const addClickHandler = (event)=>{
        event.preventDefault();
        setAmount(amount + 1);
    }
    return(
        <form>
            <div>
                <h4>Amount</h4>
                <div className={classes.amountDiv}>{amount}</div>
            </div>
            <button type="submit" className={classes.button} onClick={addClickHandler}>+Add</button>
        </form>
    )
}

export default MealsForm;