import React, { Component } from 'react'
import QuickSearch from './Quicksearch';

export default class Quicksearches extends Component 
{
render() {
    const { quicksearches } = this.props;
    return (
        <>
            <div className="bottomSection">
                <div className="container">
                <h1 className="bottom-header">Quick Searches</h1>
                <h3 className="bottom-subheader">Discover restaurants by type of meal</h3>
                <div className="qs row">
                    {
                        quicksearches.map((item, index) => {
                            return <QuickSearch key={index} image={require('../' + item.image).default} title={item.name} description={item.content}  mealType={item.meal_type}/>
                        })
                    }
                </div>
                </div>
            </div>
        </>
    )
}
}