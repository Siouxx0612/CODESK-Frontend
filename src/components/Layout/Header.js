import { Fragment } from 'react';
import mealsImg from '../../assets/Food-Images-Free-Download.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <h1 >
                        Foodzilla
                    </h1>
                </div>

                <div>
                    <div className={classes.logo}>
                        Delivery to: Gabriel Jönssonsgatan 8 ^
                    </div>
                </div>

                <div>
                    <div >
                        Choose time: ^
                    </div>
                </div>

                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} />
            </div>
        </Fragment>
    );
};

export default Header;