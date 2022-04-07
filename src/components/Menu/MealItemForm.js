import Input from '../UI/Input';
import { useRef, useState } from 'react';
import classes from '../Menu/MealItemForm.module.css';

const MeaItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        // String 
        const enteredAmount = amountInputRef.current.value;
        //Convert 
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={amountInputRef}
            input={{
                id: "Amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
            }} />
        <div className={classes.button}>+ Add</div>
        {!amountIsValid && <p>This is not valid amount (1-5).</p>}
    </form>
};

export default MeaItemForm;