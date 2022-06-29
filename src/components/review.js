import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            stars: this.props.stars
        }
    }

    render() {
        return(
            <div className="card w-75 mx-auto mt-4 mb-3">
                <div className="card-body">
                    <h4>{this.props.review}</h4>
                </div>
                <div className="card-footer">
                    <h5>{this.props.stars} Star</h5>
                </div>
            </div>
        );
    }
}