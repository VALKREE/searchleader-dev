import React from 'react';
import classes from "./Main.module.css";
import {Routes,Route} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import Error404 from "../Errors/Error404/Error404";

const Main = () => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </main>
    );
};

export default Main;