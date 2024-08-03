import React from "react";
import classes from './MealsList.module.css'

const MealsList = (props)=>{
    return (
        props.meals.map(({id ,name,description , price})=>{
            return <li key={id} className={classes.meal}>
                <h3>{name}</h3><p className={classes.description}>{description}</p><p className={classes.price}>{price}</p>
            </li>
        })
    )
}

export default MealsList;