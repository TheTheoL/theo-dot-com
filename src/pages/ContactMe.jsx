import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../Animation';
import styled from 'styled-components';
import github from '../images/github-brands.svg';
import linkedin from '../images/linkedin-brands.svg';
import atsolid from '../images/at-solid.svg';
//background image



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
                        <img src={atsolid} alt="" />
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
    
    background-image: url('../img/city.jpg');
    img {
        height: 3rem;
        width: 3rem;
        
    }
    h2 {
        padding-left: 2rem;
        color: black;
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