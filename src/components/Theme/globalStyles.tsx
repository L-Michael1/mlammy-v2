import { createGlobalStyle } from 'styled-components'

type ThemeType = {
    background: string,
    primary: string,
    secondary: string,
    accent: string,
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

    * {
        margin: 0;
        font-family: 'Nunito', sans-serif;
        transition: all 0.4s linear;
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
        color: ${({ theme }) => theme.accent};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyle