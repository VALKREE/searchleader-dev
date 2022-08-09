import React, {useContext, useEffect, useState} from 'react';
import classes from './Catalog.module.css';
import classesGoodItem from '../Catalog/GoodItem/GoodItem.module.css';
import GoodList from "./GoodList/GoodList";
import DB from '../../DATABASE/DB.json';
import {CartContext} from "../../context/CartContext";
import {useNavigate} from "react-router-dom";

const Catalog = () => {
    const [goods] = useState(DB);
    const [temporaryCart, setTemporaryCart] = useState([]);
    const {isCount, setIsCount} = useContext(CartContext);
    const {setIsTemporaryCart} = useContext(CartContext);
    const navigate = useNavigate();
    function add(e){
        e.preventDefault();
        e.target.classList = classesGoodItem.active;
        e.target.innerText = 'В КОРЗИНЕ';
        e.target.onclick = redirect;
        let item = e.target.parentNode;
        const newCartItem = {
            id: item.id,
            image: item.children[0].currentSrc,
            title: item.children[1].innerText,
            price: Number(item.children[2].innerText.replace('₽', '')),
            count: 1
        }
        setTemporaryCart([...temporaryCart, newCartItem]);
        setIsCount(isCount + 1);
    }
    useEffect(() => {
        setIsTemporaryCart(temporaryCart);
    });
    function redirect(){
        navigate("/cart", { replace: false });
    }
    return (
        <div className={classes.catalog}>
            <GoodList add={add} goods={goods} heading="Каталог товаров"/>
        </div>
    );
};

export default Catalog;