import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../images';
import { data } from '../data';
import slider from '../slider.css';
import { titleAnimation, pageAnimation } from '../Animation';
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
            <motion.h1 variants={titleAnimation} className='title'>My Work</motion.h1>
            <motion.p>Welcome to my work page! These project can be </motion.p>
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
                                    <motion.img src={github} alt="photo" />
                                    <h3>{data.title}</h3>
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>

    )
}