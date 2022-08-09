import React, {useContext, useEffect, useState} from 'react';
import classes from './CartList.module.css';
import CartItem from "../CartItem/CartItem";
import Loader from "../../UI/Loader/Loader";
import {CartContext} from "../../../context/CartContext";


const CartList = ({cart, heading}) => {
    const {isTemporaryCart,setIsTemporaryCart} = useContext(CartContext);
    const {isCount,setIsCount} = useContext(CartContext);
    const [isItemsLoading,setItemsLoading] = useState(false);
    let prices = 0;
    /*
       fetch => setIsItemsLoading(true) => fetch success => setIsItemsLoading(false)
     */
    for(let i=0;i<cart.length;i++){
        prices += cart[i].price;
    }

    const [total,setTotal] = useState(prices);

    function increased(price,count){
        setTotal(total + price)
        prices = total;
        setIsCount(isCount + 1)
    }
    function decreased(price,count) {
        setTotal(total - price)
        prices = total;
        setIsCount(isCount - 1)
    }

    const removeItem = (item) => {
        setIsTemporaryCart(
            isTemporaryCart.filter(
                i => i.id !== item.id
            )
        );
        decreased(item.price*item.count);
        let value = isCount - item.count;
        setIsCount(value)
    }
    return (
        <div className={classes.cartList}>
            <h1 className={classes.heading}>{heading}</h1>
            {

                isItemsLoading
                ? <Loader />
                : cart.length !== 0
                    ? cart.map((item) => <CartItem increased={increased} decreased={decreased} item={item} remove={removeItem} key={item.id}/>)
                    : <h3 className={classes.empty}>В корзине пусто!</h3>
            }
            {
                total === 0 ? <p className={classes.total}></p> : <p className={classes.total}>Сумма {total} ₽</p>
            }
        </div>
    );
};

export default CartList;