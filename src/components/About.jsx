import React from 'react';
import home1 from '../img/home1.png';

export default function About() {
    return (
        <div className='description'>
            <div className='title'>
                <div className='hide'>
                    <h2>I'm here to make</h2>
                </div>
                <div className='hide'>
                    <h2>your <span>Front-End</span>Development</h2>
                </div>
                <div className='hide'>
                    <h2>better!</h2>
                </div>
                <p>Contact Me for any front-end ideas that you have.</p>
                <button>Contact Me</button>
            </div>
            <div className="img">
                <img src={home1} alt="man"></img>
            </div>
        </div>
    )
}
