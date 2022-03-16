import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <div >
                        Foodzilla
                    </div>
                </div>
                <div className={classes.delivery}>
                    <div className={classes.deliveryChoice}>Delivery</div>
                    <div className={classes.or}>or</div>
                    <div className={classes.pickUp}>PickUp</div>
                </div>
                <div>
                    <div className={classes.deliveryAdress}>
                        Gabriel Jönssonsgatan 8
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