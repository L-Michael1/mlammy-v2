import { createGlobalStyle } from "styled-components";

type ThemeType = {
    background: string;
    primary: string;
    secondary: string;
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

    * {
        margin: 0;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
        transition: all 0.3s linear;
    }

    body {
        background: ${({ theme }) => theme.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${({ theme }) => theme.primary}
    }

    h1,
    h2,
    h3 {
        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export default GlobalStyle;
