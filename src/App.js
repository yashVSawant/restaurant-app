import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Header/>
      <Summary/>
      <Meals/>
      
    </div>
  );
}

export default App;
