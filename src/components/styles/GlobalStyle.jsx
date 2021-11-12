import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
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
        padding-bottom: 3rem;
    }
`;

const Button = styled.button`
	font-size: 1.25rem;
	width: 10rem;
	height: 2rem;
	margin: 1rem 0;
	border: 1px transparent;
	border-radius: 0.35rem;
`;

export { GlobalStyle, Button };
