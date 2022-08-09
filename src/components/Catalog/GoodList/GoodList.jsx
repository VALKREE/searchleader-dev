import React, {useState} from 'react';
import classes from './GoodList.module.css';
import GoodItem from "../GoodItem/GoodItem";
import Loader from "../../UI/Loader/Loader";

const GoodList = ({add, goods, heading}) => {
    const [isGoodsLoading] = useState(false);
    /*function fetchGoods(){
        setIsGoodsLoading(true);

        setIsGoodsLoading(false);
    }*/
    return (
        <div className={classes.goods}>
            <h1 className={classes.heading}>{heading}</h1>
            {isGoodsLoading
                ? <Loader />
                : goods !== null
                    ? goods.map((good) => <GoodItem add={add} good={good} key={good.id}/>)
                    : 'Нет товаров'

            }
        </div>
    );
};

export default GoodList;