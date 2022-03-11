import Input from '../UI/Input';
import classes from '../Menu/MealItemForm.module.css';

const MeaItemForm = props => {
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: "Amount",
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            initialvalue: 1,
        }} />
        <button>+ Add</button>
    </form>
};

export default MeaItemForm;