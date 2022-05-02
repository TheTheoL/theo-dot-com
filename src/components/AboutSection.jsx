import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

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





