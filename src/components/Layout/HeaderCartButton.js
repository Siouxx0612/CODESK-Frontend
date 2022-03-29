import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    return (
        <div className={classes.button} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </div>
    );
};

export default HeaderCartButton;