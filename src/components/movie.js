import React from 'react';
import ReviewList from './reviewList';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.review,
            title: this.props.title,
            synopsis: this.props.synopsis,
            id: this.props.id
        }
    }

    render() {       
        return(
            <div className="card w-75 mt-5 mb-5 mx-auto">
                <div className="card-header bg-success text-white">
                    <h2>{this.state.title}</h2>
                </div>
                <div className="card-body">
                    <h3>{this.state.synopsis}</h3>
                    <br></br>
                </div>
                <div className="card-footer">
                    <ReviewList postReview = {this.postReview} {...{title: this.state.title, reviews: this.state.reviews}} />
                </div>
            </div>
        );
    }
}