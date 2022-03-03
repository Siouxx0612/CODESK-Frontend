import { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
            <h1>Foodora on steroids</h1>
            <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} />
            </div>
        </Fragment>
    );
};

export default Header;