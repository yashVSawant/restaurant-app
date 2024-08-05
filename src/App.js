import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpne , setIsCartOpen] = useState(false);
  const closeHandler = ()=>{
    setIsCartOpen(false)
  }
  const showCartHandler = ()=>{
    setIsCartOpen(true)
  }
  return (
    <CartProvider>
      {isCartOpne && <Cart onClose={closeHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Summary/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
