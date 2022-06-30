import React from 'react';
import Stars from './stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewState: '',
            stars: ''
        }
        this.submitReview = this.submitReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.updateStars = this.updateStars.bind(this);
    }

    submitReview(e) {
        let reviewObj = {review: this.state.reviewState, stars: this.state.stars};
        this.props.createReview(reviewObj);
    }

    updateReview(event) {
        this.setState({reviewState: event.target.value});
    }

    updateStars(star) {
        this.setState({stars: star});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 mb-3 mx-auto">
                        <label for="review" className="form-label">Leave a Review for {this.props.title}</label>
                        <textarea className="form-control" name="review" rows="6" onChange={this.updateReview}></textarea>
                    </div>
                </div>
                <Stars updateStars = {this.updateStars} {...{title: this.props.title}} />
                <div className="row">
                    <div className="col-6 mt-4 mb-3 mx-auto">
                        <button className="btn btn-primary" onClick={this.submitReview}>Submit</button>
                    </div>
                </div>
        </div>
        )
    }
}