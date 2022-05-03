import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//framer motion
import { motion } from 'framer-motion';

export default function AboutSection() {

    //FramerMotion
    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };
    const container = {
        hidden: { x: 100 },
        show: { x: 0 },
    }

    return (
        <About>
            <Description>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="title"
                >
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}
                            initial="hidden"
                            animate="show">I strive to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>frontend</span> development</h2>
                    </Hide>
                    <Hide>
                        <h2>better.</h2>
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







