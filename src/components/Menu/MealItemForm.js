import Input from '../UI/Input';
import classes from '../Menu/MealItemForm.module.css';

const MeaItemForm = props => {
    return <form className={classes.form}>
        <Input label="Amount"
            input={{
                id: "Amount" + props.id,
                type: "number",
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1,
            }} />
        <div className={classes.button}>+ Add</div>
    </form>
};

export default MeaItemForm;