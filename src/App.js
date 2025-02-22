import React from "react";
import "./App.css";
import { Item } from "./components/item";
import { Cart } from "./components/cart";
function App() {
  return (
    <div className="App">
      <Cart />
      <Item name="macbook air" price={100000}></Item>
      <Item name="pendrive" price={500}></Item>
      <Item name="realme" price={12000}></Item>
    </div>
  );
}

export default App;
