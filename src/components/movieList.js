import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 0,
                    title: "Jaws",
                    image: "/images/Jaws.jpg",
                    synopsis: "A giant shark stalks some fishermen",
                    review: []
                },
    
                {
                    id: 1,
                    title: "Batman",
                    image: "/images/Batman.jpg",
                    synopsis: "An orphan goes on a psychotic trip believing he is a superhero",
                    review: []
                }
            ]
        }
    }

    render() {

        let movies;
        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }

        return(
            <div className="container-fluid text-center">
                <h1><u>Movie Reviews</u></h1>
                <br></br>
                {movies}
            </div>
        );
    }
}