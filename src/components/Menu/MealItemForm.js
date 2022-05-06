import Input from '../UI/Input';
import { useRef, useState } from 'react';
import classes from '../Menu/MealItemForm.module.css';

const MeaItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    //submithandler function where we get event object which us send as an argument automatically when we call the function on Submit
    const submitHandler = event => {
        event.preventDefault();
        // String always
        const enteredAmount = amountInputRef.current.value;
        //Convert string number to a number by putting +infront 
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return <form
        className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref={amountInputRef}
            input={{
                id: "Amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
            }} />
        <button className={classes.button}>+ Add</button>
        {!amountIsValid && <p>This is not valid amount (1-5).</p>}
    </form>
};

export default MeaItemForm;