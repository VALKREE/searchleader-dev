import React, {useRef} from 'react';
import classes from './GoodItem.module.css';
import Button from "../../UI/Button/Button";

const GoodItem = ({add, good}) => {
    return (
        <div className={classes.good} id={good.id}>
            <img src={good.image} alt={good.title} className={classes.image} />
            <p className={classes.title} >{good.title}</p>
            <p className={classes.price} >{good.price} ₽</p>
            <Button
                onClick={add}
                className={classes.button}
            >ДОБАВИТЬ В КОРЗИНУ</Button>
        </div>
    );
};

export default GoodItem;