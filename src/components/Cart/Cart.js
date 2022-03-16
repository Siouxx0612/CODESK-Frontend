import Modal from '../UI/Modal';
import { render } from '@testing-library/react';
import classes from '../Cart/Cart.module.css';

const Cart = props => {

    const cartitems = <ul className="cart-items">{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.65</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;