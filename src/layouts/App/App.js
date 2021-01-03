import './App.scss';
import React from "react";

import {Footer} from "../../components/Footer/footer";
import {Login} from "../../components/Login/login";
import {Article} from "../../components/Article/article";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
    return (
        <>
            <Router>
                <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/article" component={Article}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;