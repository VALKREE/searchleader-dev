import React, {useContext} from 'react';
import classes from './Cart.module.css';
import CartList from "./CartList/CartList";
import Form from "./Form/Form";
import {CartContext} from "../../context/CartContext";

const Cart = () => {
    const {isTemporaryCart} = useContext(CartContext);
    return (
        <div className={classes.cart}>
            <CartList heading='Корзина' cart={isTemporaryCart}/>
            <Form heading='Пожалуйста, представьтесь'/>
        </div>
    );
};

export default Cart;