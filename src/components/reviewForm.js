import React from 'react';
import Review from './review';
import Stars from './stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: ''
        }
        this.submitReview = this.submitReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.updateStars = this.updateStars.bind(this);
    }

    submitReview() {
        return <Review {...{review: this.state.review, stars: '5 Stars'}} />
    }

    updateReview(event) {
        this.setState({review: event.target.value});
    }

    updateStars(star) {
        this.setState({stars: star});
    }

    render() {
        return(
            <div className="container-fluid">
                <form id="reviewForm">
                    <div className="row">
                        <div className="col-6 mb-3 mx-auto">
                            <label for="review" className="form-label">Leave a Review for {this.props.title}</label>
                            <textarea className="form-control" id="review" rows="6" value={this.state.review} onChange={this.updateReview}></textarea>
                        </div>
                    </div>
                    <Stars {...{title: this.props.title}} />
                    <div className="row">
                        <div className="col-6 mt-4 mb-3 mx-auto">
                            <button type="submit" className="btn btn-primary" onClick={this.submitReview}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}