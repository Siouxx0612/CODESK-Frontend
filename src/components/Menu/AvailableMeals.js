import classes from '../Menu/AvailableMeals.module.css';
import Card from '../UI/Card';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'KebabRulle',
        description: 'Finest Turkish kebab',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Cevapcici',
        description: 'A Croatian specialty!',
        price: 19.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];


const AvalableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    );

};

export default AvalableMeals;