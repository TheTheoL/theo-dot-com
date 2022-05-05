import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

export default function ContactMe() {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <h1>Contact</h1>
        </motion.div>
    )
}