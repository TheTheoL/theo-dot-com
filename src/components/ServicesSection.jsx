import React from 'react';
//import icons
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';

import react from '../images/react.jpg';
//Styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
import { useScroll } from './useScroll';
import { scrollReveal } from '../Animation';

export default function ServicesSection() {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} animate={controls} ref={element} initial={'hidden'}>
            <Description>
                <h2>High <span>quality</span> development of websites and web applications using <span className='react'>React JS</span>.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="a clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="a diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={react} alt="code" />
            </Image>
        </Services>
    )
}

//instead of stating a .div with styled, we can add parentheseis and insert 'About' that automatically imports all the styling from that styled component.
const Services = styled(About)`
color: black;
h2 {
    padding-bottom: 1.5rem;
    .react {
        color: #61DBFB;
    }
}
p {
    width: 70%;
    padding: 1rem 0rem 2rem 0rem;
}
@media (max-width: 1300px) {
            display: block;
            
}
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
            justify-content: center;
            
}
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`