import './App.scss';
import React from "react";
import {Signup} from "../../components/Signup/signup";
import {Article} from "../../components/Article/article";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
    return (
        <>
            <Router>
                <Switch>
                <Route path="/" exact component={Signup}/>
                <Route path="/article" component={Article}/>
                </Switch>
            </Router>

        </>
    );
}

export default App;