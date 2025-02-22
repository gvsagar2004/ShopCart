import React, { useContext } from "react";
import { cartContext } from "../context/Cart";
export const Item = (props) => {
  const cart = useContext(cartContext);
  console.log("cart", cart);
  return (
    <div>
      <h4>Item : {props.name}</h4>
      <p>Price : {props.price}</p>
      <button onClick={()=> 
        cart.setItems([...cart.items, {name: props.name, price: props.price},])}>Add to Cart</button>
    </div>
  );
};
