import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../Animation';
import styled from 'styled-components';

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
                    <motion.h2 variants={titleAnimation}>Get in Touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send Me A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send An Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Social Media</h2>
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
    @media (max-width: 1300px) {
            padding: 2rem;
            font-size: 1rem;
            
}
`;
const Title = styled.div`
    margin-bottom: 4rem;
    color: black; 
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 2rem;
`;