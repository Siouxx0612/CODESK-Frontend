import Modal from '../UI/Modal';
import { CallApi } from '../Utillitys/Api';
import classes from '../Cart/Cart.module.css';

const apiCall = () => {
    CallApi({order: 'Hello this is api call'}, 'POST', 'http://localhost:5000/order').then((result) => console.log(result))
}

const Cart = props => {

    const cartitems = <ul className={classes["cart-items"]}>{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;
    

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
                <button className={classes.button} onClick={apiCall} >Order</button>
            </div>
        </Modal>
    )
};

export default Cart;