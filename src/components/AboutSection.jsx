import React from 'react';
import { Link } from 'react-router-dom';

import { About, Description, Image, Hide } from '../styles';
//framer motion
import { motion } from 'framer-motion';
import profile from '../images/profile.jpeg';
import { titleAnimation, scrollReveal, photoAnimation } from '../Animation';


export default function AboutSection() {


    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>I strive to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>frontend</span> development</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>better.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={scrollReveal}>
                    Contact me for any development ideas you have.
                </motion.p>
                <Link to="/contact"><motion.button variants={scrollReveal}>Contact Me</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} initial='hidden' animate='show' src={profile} alt="" />
            </Image>

        </About>


    );
};

    //FramerMotion variants
    // const titleAnimation = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1, transition: { duration: 2 } },
    // };
    // const container = {
    //     hidden: { x: 100 },
    //     show: {
    //         x: 0,
    //         transition: {
    //             duration: 0.75,
    //             ease: "easeOut",
    //             staggerChildren: 1,

    //         }
    //     }
    // }







