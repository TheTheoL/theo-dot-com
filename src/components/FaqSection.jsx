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
                Any Questions<span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="question">

                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </div>

                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What Skills Do You Have?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What services do you offer?">
                    <div className="question">

                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
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