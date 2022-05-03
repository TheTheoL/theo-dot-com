import {
    createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle `

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: white ;
        font-family: 'Inter', sans-serif;
        padding: 0 10rem;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #F66B0E;
        background: transparent;
        color: black;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #F66B0E;
            color: white;
        }
        
    }
    h2 {
            font-weight: lighter;
            font-size: 3.5rem;
        }
        h3 {
            color: black;
        }
        h4 {
            font-weight: bold;
            font-size: 2rem;
        }
        a {
            font-size: 1.1rem;
        }
        span {
            font-weight: bold;
            color: #F66B0E;
        }
        p {
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.2rem;
            line-height: 150%;
        }
`
export default GlobalStyle;