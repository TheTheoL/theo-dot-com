import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//framer motion
import { motion } from 'framer-motion';

export default function AboutSection() {


    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>I strive to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>frontend</span> development</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>better.</motion.h2>
                    </Hide>
                </motion.div>
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







