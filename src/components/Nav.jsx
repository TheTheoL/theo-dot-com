import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Theo Lufkin</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
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
    min-height: 10vh;
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
`;
