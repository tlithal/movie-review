import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: ''
        }
        this.updateStar = this.updateStar.bind(this);
    }

    updateStar(event) {
        this.setState({star: event.target.value});
    }

    render() {
        return(
            <div className="row">
            <div className="col-6 mb-3 mx-auto">
                <select className="form-select" id="stars" aria-label="Star Rating" onChange={this.updateStar}>
                    <option selected disabled>Rating for {this.props.title}</option>
                    <option value="1 star">1</option>
                    <option value="2 stars">2</option>
                    <option value="3 stars">3</option>
                    <option value="4 stars">4</option>
                    <option value="5 stars">5</option>
                </select>
            </div>
        </div>
        );
    }
}