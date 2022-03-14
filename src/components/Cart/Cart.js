
import { render } from '@testing-library/react';
import classes from '../Cart/Cart.module.css';

const Cart = props => {

    const cartitems = <ul className="cart-items">{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <div>
            {cartitems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.65</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
};

export default Cart;