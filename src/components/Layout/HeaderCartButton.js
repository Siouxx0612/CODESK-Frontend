import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {

    return (
    <button>
        <span>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span></span>
    </button>
    );
};

export default HeaderCartButton;