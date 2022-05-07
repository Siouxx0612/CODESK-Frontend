import { Fragment } from 'react';
import classes from '../Layout/ToggleButton.module.css';

const ToggleButton = () => {

    return (
        <Fragment>
            <div className={classes.delivery}>
                <div
                 

                >Delivery</div>
                <div className={classes.or}>or</div>
                <div
                    
                >Pick Up</div>
            </div>
            <div>
                <div className={classes.deliveryAdress}>
                    {/* {isDeliveryActive ? <p>Delivery:</p> : <p>PickUp: </p>} */}
                </div>
            </div>
        </Fragment>
    )
};

export default ToggleButton;