import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../Animation';
import styled from 'styled-components';
import github from '../img/github-brands.svg';
import linkedin from '../img/linkedin-brands.svg';
import email from '../img/at-solid.svg';


export default function ContactMe() {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Title>
                <Hide>
                    <motion.h1 variants={titleAnimation}>Get in Touch.</motion.h1>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <img src={github} alt="" />
                        <h2>Check out my Github</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <img src={email} alt="" />
                        <h2>Send An Email</h2>
                    </Social>
                </Hide>

            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    background: url('./img/aboutbanner.jpg');
    img {
        height: 2rem;
        width: 2rem;
        
    }
    h2 {
        padding-left: 2rem;
    }
    @media (max-width: 1300px) {
            padding: 2rem;
            font-size: 1rem;
            
}
`;
const Title = styled.div`
    font-size: 4rem;
    margin-bottom: 4rem;
    color: black;
    font-family: 'Lobster', cursive; 
`;
const Hide = styled.div`
    overflow: hidden;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 2rem;
`;