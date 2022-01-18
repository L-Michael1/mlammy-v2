import { createGlobalStyle } from 'styled-components'

interface ThemeType {
    body: string;
    text: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

    * {
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyle