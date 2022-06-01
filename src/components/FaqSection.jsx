import React, { useState } from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import { Toggle } from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../Animation';

export default function FaqSection() {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial={'hidden'}>
            <h2>
                My Resume<span>EXPERIENCE</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title='About Me'>
                    <div className="question">
                        <div className="answer">
                            <p>Ambitious and goal-oriented professional with a strong academic background expanding my career as a front-end developer. Strengths include my ability to self-manage while maintaining close communication with my fellow front end developers, XD designers, and business partners and consistently having a positive outlook. My close attention to detail and organization on all fronts lends itself to a seamless handoff to other members of the project team.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title='Education'>
                    <div className="question">

                        <div className="answer">
                            <div>
                                <p>Master of Science in Marketing</p>
                                <span>Southern New Hampshire University</span>
                            </div>

                            <div>
                                <p>Bachelor of Arts in English and Writing</p>
                                <span>Suffolk University, Boston MA</span>
                            </div>
                        </div>

                    </div>
                </Toggle>

                <Toggle title="Skills">
                    <div className="question">
                        <div className="answer">
                            <p>My skills are in frontend development but I also have knowledge in backend work. HTML, CSS, and JavaScript are the foundations of web and app developement and I excel on all fronts specializing in React JS.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What services do you offer?">
                    <div className="question">

                        <div className="answer">
                            <p>I offer both design and frontend developement services.</p>
                        </div>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    color: black;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 2rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 0.5rem 0rem;
        p {
            padding: 0.5rem 0rem;
        }
        
    }
`