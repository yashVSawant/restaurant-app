import React from "react";

import classes from './Summary.module.css'

const Summary = ()=>{
    return (
        <section className={classes.summary}>
            <h1 >Delicious Food, Deleverd To You</h1>
            <p>
                Choose your favorite meal from our board selection of available meals and enjoy a deliciuos lunch and dinner at home 
            </p>
            <p>
                All our meals are cooked with highly quality ingredients, just-in-time and of course by expert chefs!
            </p>
        </section>
    )
}

export default Summary;