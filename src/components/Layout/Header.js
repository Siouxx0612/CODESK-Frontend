import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';
import { useState } from 'react';

const reload = () => {
    window.location.reload()
};

const Header = props => {

    const [isActive, setIsActive] = useState(false);
    

    function changeButtons () {
            setIsActive = (!isActive)
        
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo} onClick={reload}>
                    <div >
                        Foodzilla
                    </div>
                </div>
                <div className={classes.delivery}>
                    <div
                        className={isActive ? classes.deliveryAction : classes.deliveryChoice}
                        onChange={changeButtons}
                    >Delivery</div>
                    <div className={classes.or}>or</div>
                    <div
                        className={isActive ? classes.pickUpAction : classes.pickUpChoice}
                        onChange={changeButtons}
                    >Pick Up</div>
                </div>
                <div>
                    <div className={classes.deliveryAdress}>
                        Delivery to: 
                    </div>
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