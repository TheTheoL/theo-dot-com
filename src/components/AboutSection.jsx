import React from 'react';
import aboutbanner from '../img/aboutbanner.jpg';
import { About, Description, Image, Hide } from '../styles';
//framer motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../Animation';


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
                <motion.p variants={fade}>
                    Contact me for any development ideas you have.
                </motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} initial='hidden' animate='show' src={aboutbanner} alt="" />
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







