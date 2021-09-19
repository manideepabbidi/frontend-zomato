import React, { Component } from 'react'
import "../styles/home.css";
import Wallpaper from  "./Wallpaper";
import Quicksearches from "./Quicksearches";
import axios from 'axios';
const constants=require("../constants");
const API_URL=constants.API_URL;
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            locations:[],
            mealtypes:[]
        }

    }
    componentDidMount() {
        axios.get(`${API_URL}/api/getAllLocations`)
            .then(result => {
                this.setState({
                    locations: result.data.locations
                });
            })
            .catch(error => {
                console.log(error);
            });
        
        axios.get(`${API_URL}/api/getAllMealTypes`)
            .then(result => {
                this.setState({
                    mealtypes: result.data.mealtypes
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {locations,mealtypes}=this.state;
        return (
            <React.Fragment>
                <Wallpaper cities={locations}/>
                <Quicksearches quicksearches={mealtypes}/>
            </React.Fragment>
        )
    }
}
