import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: props.review,
            stars: props.stars
        }
    }

    render() {
        return(
            <div className="card w-75 mx-auto mt-4 mb-3 border-dark">
                <div className="card-body bg-success text-white">
                    <h4><em>{this.state.review}</em></h4>
                </div>
                <div className="card-footer">
                    <h5>{this.state.stars}</h5>
                </div>
            </div>
        );
    }
}