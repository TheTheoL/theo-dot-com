import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import { data } from '../data';
import slider from '../slider.css';
import { pageAnimation } from '../Animation';
import github from '../images/github-brands.svg';

export const MyWork = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <h1 className='title'>My Work</h1>
            <div className='intro'>
                <p>Welcome to my work page! These projects show off my HTML, CSS (and CSS libraries), JavaScript, and React JS skills. Click the titles to go to each projects GitHub page.</p>
            </div>
            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag='x' d
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'
                >
                    {data.map(data => {
                        return (
                            <motion.div className='item' key={data.id}>
                                <motion.img src={data.image} alt="photo" />
                                <div className="icons">

                                    <a href={data.GitHub} target="_blank"><h3>{data.title}</h3></a>
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

//styling
