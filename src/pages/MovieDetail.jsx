import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { MovieState } from '../movieState';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

export default function MovieDetail() {
    const url = useLocation();
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url.pathname
        );
        if (currentMovie[0]) setMovie(currentMovie[0]);
    }, [movies, url]);
    return (
        <>
            {movie && (
                <motion.div
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="" />
                    </Headline>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </motion.div>
            )}
        </>
    )
}

const Details = styled.div`
    color: black;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        
        transform: translate(-50% -10%);
    }
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 70vh;
    display: flex;
    margin: 0.5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 1rem;
    }
    .line {
        height: 0.5rem;
        background: #d26464;
        margin: 1rem 0rem;
        width: 100%;

    }
    p {
        padding: 2rem 0rem;
    }
`;
const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`


//Award component
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
