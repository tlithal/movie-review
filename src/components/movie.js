import React from 'react';
import ReviewForm from './reviewForm';
import ReviewList from './reviewList';
import Review from './review';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: '',
            title: this.props.title,
            stars: this.props.stars
        }
        this.postReview = this.postReview.bind(this);
    }


    postReview(review) {
        this.setState(state => {
            state.reviews = review;
        });
    }

    render() {
        
        return(
            <div className="card w-75 mx-auto">
                <div className="card-header bg-success text-white">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="card-body">
                    <h3>{this.props.synopsis}</h3>
                    <br></br>
                </div>
                <div className="card-footer">
                    <ReviewList {...{title: this.state.title, stars: this.state.stars}} />
                </div>
            </div>
        );
    }
}