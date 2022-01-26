import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[dark, setDark] = useState(false);
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = dark ? "App dark" : "App light"

  const darkClick = () => {
    setDark(!dark)
  }

  const [items, setItems] = useState(itemData);

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {darkClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
