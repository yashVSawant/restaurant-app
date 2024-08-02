import React from "react";
import "./Header.css"

const Header = ()=>{
    return (
        <React.Fragment>
            <header>
                <h1>ReactMeals</h1>
                <div className="cartDiv">
                        <i class="fa fa-shopping-cart"></i>
                        <p>Your Cart</p>
                        <button>0</button>
                </div>
            </header>
            <div className="imageDiv">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="food"></img>
            </div>
        </React.Fragment>
    )
}

export default Header;