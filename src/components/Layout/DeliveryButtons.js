import classes from './DeliveryButtons.module.css';
import { useState } from 'react';

const deliveryChoice = [{ name: 'Delivery' }, { name: 'PickUp' }]
const DeliveryButton = () => {
    const [active, setActive] = useState(false);
    return deliveryChoice.map((data, k) => (
        <div
            key={k}
            className={`deliveryChoice ${active === k ? classes.deliveryAction : ''}`}
            onClick={() => setActive(k)}
        >
            {data.name}
        </div>
    ));
};

export default DeliveryButton;