import React from "react";
import "./Header.css"

const Header = ()=>{
    return (
    <header>
        <div>
            <h1>ReactMeals</h1>
            <div className="cartDiv">
                <i class="fa fa-shopping-cart"></i>
                <p>Your Cart</p>
                <button>0</button>
            </div>
        </div>
        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="food"></img>
        
    </header>
    )
}

export default Header;