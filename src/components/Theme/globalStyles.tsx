import { createGlobalStyle } from "styled-components";

type ThemeType = {
    background: string;
    primary: string;
    secondary: string;
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

    * {
        margin: 0;
        font-family: 'Karla', sans-serif;
        transition: all 0.2s linear;
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${({ theme }) => theme.primary}
    }

    h1,
    h2,
    h3 {
        color: ${({ theme }) => theme.primary};
        font-family: 'Arimo', sans-serif;
        text-transform: uppercase;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export default GlobalStyle;
