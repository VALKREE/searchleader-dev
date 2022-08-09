import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {CartContext} from "./context/CartContext";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isCount, setIsCount] = useState(0);
    const [isTemporaryCart, setIsTemporaryCart] = useState([]);
    const [isTotal, setIsTotal] = useState(0);
  return (
      <CartContext.Provider value={{
          isCount,
          setIsCount,
          isTemporaryCart,
          setIsTemporaryCart,
          isTotal,
          setIsTotal
      }}>
          <BrowserRouter>
              <div className={classes.App}>
                  <Header/>
                  <Main/>
                  <Footer/>
              </div>
          </BrowserRouter>
      </CartContext.Provider>
  );
}

export default App;
