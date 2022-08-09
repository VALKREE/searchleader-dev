import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p className={classes.text}>Тестовое задание на должность младшего программиста «Лидера поиска», ver. 3.0</p>
        </footer>
    );
};

export default Footer;