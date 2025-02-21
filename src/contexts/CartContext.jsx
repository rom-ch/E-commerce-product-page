import { createContext, useReducer } from "react";

const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
};

function reducer(cart, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return cart + payload.quantity;
    case ACTIONS.DELETE:
      return 0;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, 0);

  function addToCart(quantity) {
    dispatch({ type: ACTIONS.ADD, payload: { quantity } });
  }

  function emptyCart() {
    dispatch({ type: ACTIONS.DELETE });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}
