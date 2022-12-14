import { createGlobalStyle } from 'styled-components'
import background from '../assets/programando.png'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
    }

    a{
        text-decoration: none;
    }

    body{
        background-color: #333;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    main{
        background-image: url(${background});
        background-size: cover;
    }
`
