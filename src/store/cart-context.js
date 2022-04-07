import React from "react";

const CartContext = React.createContext({
    //Not for usage, just for beter autocopletion
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;