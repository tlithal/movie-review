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
                    synopsis: "A giant shark stalks some fishermen",
                    review: [ {
                        review: 'It was good',
                        stars: '5 Stars'
                    },
                    
                    {
                        review: 'It was bad',
                        stars: '1 Star'
                    }
                            ]
                },
    
                {
                    id: 1,
                    title: "Batman",
                    synopsis: "An orphan goes on a psychotic trip believing he is a superhero",
                    review: [
                        {
                            review: "Dark Movie",
                            stars: "2 Stars"
                        }
                    ]
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