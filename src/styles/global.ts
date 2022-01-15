// libraries
import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        max-width: 100%;
        overflow-x: hidden;
    }

    CSS
    html {
    scroll-behavior: smooth;    
    }
    body, input, button {
        font-family: Montserrat, sans-serif;
    }
    #root {
        margin: 0 auto;
    }
`;

export default globalStyle;
