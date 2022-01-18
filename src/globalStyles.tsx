import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

    * {
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

export default GlobalStyle