import {
    createGlobalStyle
} from "styled-components";

const GlobalStyle = createGlobalStyle `

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        //this keeps the page from having an extra space of width that cause the page to scroll horizontally.
    }

    html {
        @media (max-width: 1300px) {
            font-size: 65%;
        }
        
        
    }

    body {
       
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
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
            color: black;
            font-size: 1.2rem;
            line-height: 150%;
        }
`
export default GlobalStyle;