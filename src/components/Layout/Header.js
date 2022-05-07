import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';
import { useState } from 'react';

const reload = () => {
    window.location.reload()
};

const Header = props => {

const [isDeliveryActive, setIsDeliveryActive] = useState(true);
const [isPickupAtive, setIsPickupActive] = useState(false);

const handleMouseClick = (event) => {
    if (event.target.className.includes('deliveryOption')) {
        setIsDeliveryActive(true);
        setIsPickupActive(false)
        console.log(isDeliveryActive, isPickupAtive)
    } else if(event.target.className.includes('pickUpOption')) {
        setIsDeliveryActive(false);
        setIsPickupActive(true)
    }
} 

// function changeButtons(e) {
//     if (e.target.className.includes(classes.deliveryAction)) {
//         setIsDeliveryActive(!isDeliveryActive)
//     } else if (e.target.className.includes(classes.pickUpAction)) {
//         setIsPickupActive(!isPickupAtive)
//     }
// };

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
                    className={classes.deliveryOption}
                    onClick={handleMouseClick}
                    // className={isDeliveryActive ? classes.deliveryAction : classes.deliveryChoice}
                 
                >Delivery</div>
                <div className={classes.or}>or</div>
                <div
                    className={classes.pickUpOption}
                    // className={isPickupAtive ? classes.pickUpAction : classes.pickUpChoice}
                    
                >Pick Up</div>
            </div>
            <div>
                <div className={classes.deliveryAdress}>
                    Delivery to: Gabriel Jönssonsgatan 8
                </div>
            </div>

            <div className={classes.deliveryTime}>
                <div >
                    Choose time: Now
                </div>
            </div>
            <HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton> 
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} />
        </div>
    </Fragment>
    )
};

export default Header; 