import React from "react";
import "./header.scss"
import {BrowserRouter as Router, Link} from "react-router-dom";



export const Header = () => {
    return (
        <header className="App-header">
            <div className="App-logo">
                <Router>
                    <Link to="/">
            <img className="App-logo-img" src={"../../images/logo_WYP.svg"} alt="house of plants logo"/>
                    </Link>
                </Router>
                <div className="App-btn-login">Water calendar</div>
            </div>
            <div className="App-slider">
                <div className="App-slider-txt">
                    <h1>How Often To Water Houseplants</h1>
                    <p>How To Water Plants</p>

                        <Link to="/article">
                            <button className="App-btn-read">Read ></button>
                        </Link>

                </div>
                <img className="App-slider-img" src={"../../images/img_top.svg"} alt="philodendrons"/>
            </div>
<div className="App-green"><div className="App-green-box">Water makes your plants life</div><div className="App-green-box">Feltilizer makes them happy</div> <div className="App-green-box">Sun makes your plants grow</div>  </div>
        </header>


    );
}