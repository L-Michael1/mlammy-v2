import { createGlobalStyle } from 'styled-components'

type ThemeType = {
    background: string;
    canvas: string;
    text: string;
    buttonCanvas: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

    * {
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        transition: all 0.50s linear;
    }

    body {
        background: ${({ theme }) => theme.canvas};
        color: ${({ theme }) => theme.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyle