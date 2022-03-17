import CartContext from '../store/cart-context';

const CartProvider = props => {

    const addItemToHandler = item => {

    };

    const removeItemFromCart = id => {

    };

    const contextValues = {
        item: [],
        totalAmount: 0,
        addItem: addItemToHandler,
        removeItem: removeItemFromCart
    };

    return <CartContext.Provider values={contextValues}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider();