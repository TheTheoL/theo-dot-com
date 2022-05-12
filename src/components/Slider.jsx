import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../images';
import { data } from '../data';
import slider from '../slider.css';
import { titleAnimation, scrollReveal, photoAnimation, pageAnimation } from '../Animation';

export const Slider = () => {

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
            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag='x' d
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'
                >
                    {images.map(image => {
                        return (
                            <motion.div className='item' key={image}>
                                <motion.img src={image} alt="photo" />

                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>

    )
}