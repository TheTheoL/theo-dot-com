import styled from 'styled-components';
import {
    motion
} from 'framer-motion';

//Layout styling 


export const About = styled(motion.div)
`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
    background-image: url("./img/aboutbanner.jpg");
`;
export const Description = styled.div `
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
`;
export const Image = styled.div `
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const Hide = styled.div `
    overflow: hidden;
`