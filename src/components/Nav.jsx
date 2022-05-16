import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Nav() {
    const pathname = useLocation();
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Theo Lufkin</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        nitial={'0%'}
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to="/work">My Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>

            </ul>

        </StyledNav>
    )
}

const StyledNav = styled.div`
    min-height: 7vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #0c0c0c;
    opacity: 0.75;
    padding: 0 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        
       
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
       
    }
    li {
        padding-left: 10rem;
        position: relative;
        
    }
    @media (max-width: 1000px) {
            flex-direction: column;
            padding: 1rem;
            #logo {
                display: inline-block;
                margin: 2rem;
            }
            ul {
                padding: 2rem;
                justify-content: space-around;
                width: 100%;
            }
            li {
                padding: 0;
            }
}

`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #F66B0E;
    width: 0;
    position: absolute;
    bottom: -80%;
    left: 60%;
`;
