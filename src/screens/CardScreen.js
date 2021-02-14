import React from 'react';
import "../App.scss";
import { Card } from '../Components';
import movies from "../data/movieData.json";

const CardScreen = () => {
    return (
        <main>
            {movies.map(movie => (
                <Card key={movie.id} className="mr">
                    <Card.Image src={movie.image} alt={movie.alt} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.Description}</Card.Text>
                        <Card.Button>{movie.ctaText}</Card.Button>
                    </Card.Body>
                </Card>
            ))}
        </main>
    )
};

export default CardScreen;
