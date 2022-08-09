import React, {useState} from 'react';
import classes from './CartItem.module.css';
import Button from "../../UI/Button/Button";

const CartItem = ({props, item, decreased, increased, remove}) => {
    const [count, setCount] = useState(1);
    function decrease(){
        if(count > 0){
            setCount(count - 1);
            item.count -= 1;
            decreased(item.price, count);
        }
    }
    function increase(){
        if(count < 10){
            setCount(count + 1);
            item.count += 1;
            increased(item.price, count);
        }
    }
    const siteWidth = window.innerWidth;
    return (
        <div className={classes.item} id={item.id}>
            <img src={item.image} alt={item.title} className={classes.image}/>
            <p className={classes.title}>{item.title}</p>
            <div className={classes.counter}>
                <Button onClick={decrease} className={classes.decrease}>
                    <svg width="19" height="1" viewBox="0 0 19 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.476562" y1="0.5" x2="18.5066" y2="0.5" stroke=""/>
                    </svg>
                </Button>
                <div className={classes.count}>{count}</div>
                <Button onClick={increase} className={classes.increase}>
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.141602" y1="8.5" x2="18.1717" y2="8.5" stroke=""/>
                        <line x1="9.12646" y1="2.18557e-08" x2="9.12646" y2="17" stroke=""/>
                    </svg>
                </Button>
            </div>
            <p className={classes.price}>{item.price*count} ₽</p>
            {
                siteWidth >= 659
                ?
                    <Button
                        onClick={() => remove(item)}
                        className={classes.remove}
                    >
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)" stroke=""/>
                            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)" stroke=""/>
                        </svg>
                    </Button>
                :
                    <Button
                        onClick={() => remove(item)}
                        className={classes.remove}
                    >
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(0.727587 0.686015 -0.727587 0.686015 0.250488 0.843262)" stroke=""/>
                            <line y1="-0.5" x2="17.5227" y2="-0.5" transform="matrix(-0.727587 0.686015 -0.727587 -0.686015 13 0.135986)" stroke=""/>
                        </svg>
                        <p>удалить</p>
                    </Button>
            }

        </div>
    );
};

export default CartItem;