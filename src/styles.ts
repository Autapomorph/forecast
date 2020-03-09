import { createGlobalStyle } from 'styled-components/macro';

import { ThemeProp } from 'models';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    min-height: 0;
    min-width: 0;
    box-sizing: inherit;
    font: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 13px;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }: ThemeProp) => theme.baseBg};
    background-image: ${({ theme }: ThemeProp) => theme.baseBgImage};
    color: ${({ theme }: ThemeProp) => theme.baseTextColor};
    font-family: Open Sans, Helvetica, Verdana, Arial, sans-serif;
    font-size: 1rem;
  }
`;
