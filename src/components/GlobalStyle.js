import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`




body {
  background-color: #343541;
  color: #ECECF1;
  margin: 0;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



ul,
li,
h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
}

ul, ol, li {
    list-style: none;
}



img {
    display: block;
    max-width: 100%;
    height: auto;
    }

h1, h2 {
    text-align: center;
    margin: 40px auto 20px;
}
`;
