import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images 
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnimation, LineAnimation, slider, sliderContainer } from '../Animation';
import { useScroll } from '../components/useScroll';
import { ScrollTop } from '../components/ScrollTop';



export default function MyWork() {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>

            <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="athlete" />
                </Link>
            </Movie>

            <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="athlete" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 10rem;
    @media (max-width: 1300px) {
            padding: 2rem 2rem;
            
}
    h2 {
        padding: 0.5rem 0rem;
    }
`;
const Movie = styled(motion.div)`
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
const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #353535;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ffb48e
`;

const Frame3 = styled(Frame1)`
    background: #353535;
`
const Frame4 = styled(Frame1)`
    background: #ffb48e;
`