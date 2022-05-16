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
            <div className='social-icons'>
                <Hide>
                    <Social variants={titleAnimation}>
                        <a href="https://github.com/TheTheoL" target="_blank"><img src={github} alt="" /></a>

                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <a href="mailto: theo.lufkin@gmail.com" target="_blank"><img src={atsolid} alt="" /></a>

                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <a href="https://www.linkedin.com/in/theolufkin/" target="_blank"><img src={linkedin} alt="" /></a>

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
    overflow-x: hidden;
    overflow-y: hidden;
    .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }
    body {
        overflow: hidden;
    }
    background-image: url('../img/city.jpg');
    img {
        height: 9rem;
        width: 9rem;
        
        &:hover {
            
        }
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
    display: flex;
    justify-content: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: black;
    font-family: 'Lobster', cursive; 
`;
const Hide = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const Social = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`;