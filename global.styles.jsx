import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  * {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  body {
    color: #333333;
  }

  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;

    :hover {
      color: inherit;
    }
  }

  button:disabled {
    cursor: not-allowed;
  }

`;

export default GlobalStyle;
