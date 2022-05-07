import { Fragment } from 'react';
import mealsImg from '../../assets/wp3376124.jpeg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';
import { useState } from 'react';
import ToggleButton from './ToggleButton';

const reload = () => {
    window.location.reload()
};

const Header = props => {

    // const [isDeliveryActive, setIsDeliveryActive] = useState(true);
    // const [isPickupAtive, setIsPickupActive] = useState(false);

    // const handleMouseClick = (event) => {
    //     if (event.target.className.includes('deliveryOption')) {
    //         setIsDeliveryActive(true);
    //         setIsPickupActive(false)
    //         if(isDeliveryActive === true) {
    //             console.log('WTF NOW')   
    //         }
    //         console.log(isDeliveryActive, isPickupAtive)
    //     } else if (event.target.className.includes('pickUpOption')) {
    //         setIsDeliveryActive(false);
    //         setIsPickupActive(true)
    //         console.log(isDeliveryActive, isPickupAtive)
    //     }
    // }



    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo} onClick={reload}>
                    <div >
                        Foodzilla
                    </div>
                </div>
                <ToggleButton></ToggleButton>

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