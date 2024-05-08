import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap');

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Antonio', sans-serif;
        background-color: #070724;
    }
    
    .container {
        max-width: 1200px;
        width: 90%;
        margin: auto;
    }
      
`;

export default GlobalStyles;
