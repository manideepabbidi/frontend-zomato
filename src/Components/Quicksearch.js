import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

 class Quicksearch extends Component {
    handleClick = (mealtype,mealTypeId) => {
        this.props.history.push(`/filter?mealType=${mealtype}&mealTypeId=${mealTypeId}`);
    }

    render() {
        const { image, title, description ,mealType} = this.props;
        return (
                 <div className="qs-box col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"  onClick={() => this.handleClick(title,mealType)}  style={{cursor:"pointer"}}>
                                <div className="qs-box-items row ">
                                    <div className="no-padding col-xxl-5 col-xl-6 col-lg-5 col-md-6 col-sm-4 col-4">
                                        <img src={this.props.image} alt="img not found" />
                                    </div>
                                    <div className=" col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-8">
                                        <h4 className="qs-box-header">{this.props.title}</h4>
                                        <p className="qs-box-desc">{description}</p>
                                    </div>
                                </div>
                            
            </div>
        )
    }
}
export default withRouter(Quicksearch);

