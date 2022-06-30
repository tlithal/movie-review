import React from 'react';
import MovieList from './movieList';

export default class Container extends React.Component {
    render() {

        let movies = [
            {
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
                title: "Batman",
                synopsis: "An orphan goes on a psychotic trip believing he is a superhero",
                review: [
                    {
                        review: "This better fix it",
                        stars: "2 Stars"
                    }
                ]
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