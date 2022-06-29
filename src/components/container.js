import React from 'react';
import MovieList from './movieList';

export default class Container extends React.Component {
    render() {

        let movies = [
            {
                title: "Jaws",
                synopsis: "A giant shark stalks some fishermen",
                review: [
                    "It was good",
                    "Really Bad"
                ],

                stars: 5
            },

            {
                title: "Batman",
                synopsis: "An orphan goes on a psychotic trip believing he is a superhero",
                review: "Another test",
                stars: 4
            }
        ];

        return (
            <div className="container-fluid text-center">
                <h1><u>Movie Review's</u></h1>
                <br></br>
                <MovieList {...{movies: movies}} />
            </div>
        );
    }
}