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
                Commonly Asked Questions<span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title='How Do You Start?'>
                    <div className="question">

                        <div className="answer">
                            <p>I start by getting to know my clients and what their creative and business needs are. Whither they need a website for their business or personal brand, I want to make sure I take the time to ask the right questions and work with them so they get a unique experiene working with me and getting a final product that is specifically tailored to them.</p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="question">
                        <div className="answer">
                            <p>I love my work and typically have a Monday-Saturday work week. It depends on what projects I have in the works and during my free time I like to learn new things that help me enhance my developer skills.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What Skills Do You Have?">
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
        padding: 1rem 0rem;
        p {
            padding: 0.5rem 0rem;
        }
        
    }
`