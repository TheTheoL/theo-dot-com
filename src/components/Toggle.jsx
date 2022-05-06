//Toggle Component. Re-usable

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { titleAnimation } from '../Animation';

export const Toggle = ({ children, title }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout variants={titleAnimation}>{title}</motion.h4>
            {toggle ? children : ''}

            <div className="faq-line"></div>
        </motion.div>
    )
}


