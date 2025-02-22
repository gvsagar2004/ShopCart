import { createContext, useState } from "react";
export const cartContext = createContext(null);

export const Cartprovider = (props) => {
  const [items, setItems] = useState( []);
  return (
    <cartContext.Provider value={{ items, setItems }}>
      {props.children}
    </cartContext.Provider>
  );
};
