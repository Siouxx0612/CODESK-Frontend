import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';
import DeliveryButton from './DeliveryButtons';

const reload = () => {
    window.location.reload()
};

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo} onClick={reload}>
                    <div >
                        Foodzilla
                    </div>
                </div>
                <div className={classes.delivery}>
                    <DeliveryButton
                        className={classes.deliveryChoice}
                    />
                </div>
                <div className={classes.deliveryTime}>
                    <div >
                        Choose time: Now
                    </div>
                </div>

                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} />
            </div>
        </Fragment>
    );
};

export default Header; 