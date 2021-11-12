import { createGlobalStyle } from 'styled-components';
import './main.css';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        font-family: var(--defaultFonts);
    }
`;

export { GlobalStyle };
