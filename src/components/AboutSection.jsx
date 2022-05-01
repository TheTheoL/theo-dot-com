import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';

export default function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I strive to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>frontend</span> development</h2>
                    </Hide>
                    <Hide>
                        <h2>better.</h2>
                    </Hide>
                </div>
                <p>
                    Contact me for any development ideas you have.
                </p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>


    );
};

//Styled Component
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`




