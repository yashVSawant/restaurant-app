import React from "react";
import classes from "./Header.module.css"

import HeaderCartButton from "./HeaderCartButton";

const Header = ()=>{
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1 >ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="food"></img>
            </div>
        </React.Fragment>
    )
}

export default Header;