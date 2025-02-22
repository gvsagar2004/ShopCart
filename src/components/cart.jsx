import React, { useContext } from "react";
import { cartContext } from "../context/Cart";

export const Cart = () => {
  const cart = useContext(cartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h5>Total Bill - ${total}</h5>
    </div>
  );
};
