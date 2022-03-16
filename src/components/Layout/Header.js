import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
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
                    <div  className={classes.deliveryAdress}>
                        Delivery to: Gabriel Jönssonsgatan 8 
                    </div>
                </div>

                <div className={classes.deliveryTime}>
                    <div >
                        Choose time: Now
                    </div>
                </div>

                <HeaderCartButton onClickCartButton={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} />
            </div>
        </Fragment>
    );
};

export default Header;