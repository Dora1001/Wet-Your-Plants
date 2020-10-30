import './App.scss';
import React from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
import {Login} from "../../components/Login/login";

function App() {
    return (
        <>
            <Header />
            <Login />
            <Footer />
        </>
    );
}

export default App;