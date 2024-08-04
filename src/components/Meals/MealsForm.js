import React from "react";
import classes from './MealsForm.module.css';

import Input from "../UI/Input";

const MealsForm = ()=>{
    return(
        <form>
            <div>
                <Input lable="Amount" input={{
                    id:'amount',
                    type:'number',
                    min:1,
                    max:5,
                    defaultValue:1,
                    step:1
                    }}/>
            </div>
            <button type="submit" className={classes.button}>+Add</button>
        </form>
    )
}

export default MealsForm;