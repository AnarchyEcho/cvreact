import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
        max-height: 100%;
        max-width: 100%;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        position: relative;
        min-height: 100vh;
        background-color: #202020;
        color: #fafafa;
        margin: 0;
        padding: 0 0 10px 0;
        font-size: 16px;
    }
`