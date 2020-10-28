import React from "react";
import "./header.scss";

export const Header = () => {
    return (
        <header className="App-header">
            <div className="App-logo">

            <img className="App-logo-img" src="../../images/logo_HOP.svg" alt="house of plants logo"/>
            </div>

            <div className="App-slider">
                <div className="App-slider-txt">
                    <h1>Filodendrony</h1>
                    <p>Odkryj świat filodendronów</p>
                </div>
                <img className="App-slider-img" src="../../images/slider1.jpg" alt="philodendrons"/>
            </div>

        </header>
    );
}