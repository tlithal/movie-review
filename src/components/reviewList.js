import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm';

export default class ReviewList extends React.Component {
    render() {
        return(
            <div className="container-fluid mx-auto">
                <ReviewForm {...{title: this.props.title}} />
            </div>
        );
    }
}