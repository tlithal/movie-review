import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
        this.createReview = this.createReview.bind(this);
    }

    createReview(review) {
        let tempReview = this.state.reviews;
        tempReview.push(review);
        this.setState({reviews: tempReview});
        this.props.postReview(this.state.reviews);
    }

    render() {

        let reviewTest = [];
        for(let review of this.state.reviews) {
            reviewTest.push(<Review  {...review} />);
        }

        return(
            <div className="container-fluid mx-auto">
                {reviewTest}
                <ReviewForm createReview = {this.createReview} {...{title: this.props.title}} />
            </div>
        );
    }
}