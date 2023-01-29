import { injectGlobal } from '@emotion/css';

injectGlobal`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: pretendard, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    letter-spacing: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;
  }
`;
