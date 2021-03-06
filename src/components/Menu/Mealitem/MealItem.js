import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from '../Mealitem/MealItem.module.css';
import MealItemForm from '../MealItemForm';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
// Reach for our context to get addItem with id: that we get trough props, name, amount and price too
    const addToCartHandler = amount => {
       cartCtx.addItem({
           id: props.id,
           name: props.name,
           amount: amount,
           price: props.price,
       })
    };

    
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;