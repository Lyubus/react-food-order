import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from './../Cart/CartIcon';
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const [buttonIsHighlighted, setbuttonIsHighlighted] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setbuttonIsHighlighted(true);
        const timer = setTimeout(() => {
            setbuttonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;