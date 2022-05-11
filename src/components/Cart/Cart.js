import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { CallApi } from '../Utillitys/Api';
import classes from '../Cart/Cart.module.css';
import CartItem from './CartItem';

const apiCall = () => {
    CallApi({ order: 'Hello this is api call' }, 'POST', 'http://localhost:5000/order').then((result) => console.log(result))
}

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    //use template literal to output a dollar sign in front of this dynamic value
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    //Functions for adding and removing items
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1})
    };

    const cartitems = <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler(null, item)}
            />
        )}
    </ul>;



    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button
                    className={classes.button}
                    onClick={apiCall}
                >Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;