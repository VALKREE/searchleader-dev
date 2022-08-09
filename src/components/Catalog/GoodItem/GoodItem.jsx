import React, {useRef, useState} from 'react';
import classes from './GoodItem.module.css';
import Button from "../../UI/Button/Button";

const GoodItem = ({add, good}) => {
    const [visibility,setVisibility] = useState(false);
    const [value,setValue] = useState('ДОБАВИТЬ В КОРЗИНУ');
    const [isAdded, setIsAdded] = useState(false);

    function added(e){
        add(e);
        setVisibility(true);
        setValue('В КОРЗИНЕ');
        setIsAdded(true);
    }
    function visibilityHandler(e){
        console.log();
        if(!isAdded){
            if(e.type === "mouseenter"){
                setVisibility(true);
            }
            if(e.type === "mouseleave"){
                setVisibility(false);
            }
        }
    }

    return (
        <div className={classes.good} id={good.id} onMouseEnter={visibilityHandler} onMouseLeave={visibilityHandler} >
            <img src={good.image} alt={good.title} className={classes.image} />
            <p className={classes.title} >{good.title}</p>
            <p className={classes.price} >{good.price} ₽</p>
            <Button
                onClick={added}
                className={
                    visibility ? classes.button : classes.hidden
                }
            >{value}</Button>
        </div>
    );
};

export default GoodItem;