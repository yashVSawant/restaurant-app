import React from "react";
import classes from './MealsList.module.css';


import MealsForm from "./MealsForm";

const MealsList = (props)=>{

   return props.meals.map(({id ,name,description , price})=>{
    
        return (
            <li key={id} className={classes.meal}>
                <div>
                    <h3>{name}</h3>
                    <p className={classes.description}>{description}</p>
                    <p className={classes.price}>${price}</p>
                </div>
                <div>
                    <MealsForm item={{id ,name , price}}/>
                </div>
            </li>
        )
    })
}

export default MealsList;