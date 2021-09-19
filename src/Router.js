import React, { Component } from 'react';
import {Route,browserRouter} from "react-router-dom";
import Home from "./Components/Home";
import Filter from "./Components/Filter";
import Details from './Components/Details';
import Header from "./Components/Header";

class Router extends Component {
    render() {
        return (
            <browserRouter>
 <Header/>
            <Route exact path="/" component={Home}/>
            <Route  path="/home" component={Home}/>
            <Route path="/filter" component={Filter}/>
            <Route  path="/details" component={Details}/>
            </browserRouter>
        )
    }
}
export default Router
