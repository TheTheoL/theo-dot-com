import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images 
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';



export default function MyWork() {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="athlete" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 0rem;
    h2 {
        padding: 0.5rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 3rem;
    .line {
        height: 0.5rem;
        background: #d26464;
        margin: 2rem 0;
        width: 100%;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;