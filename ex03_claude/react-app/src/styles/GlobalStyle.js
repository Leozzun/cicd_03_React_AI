import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body, th, td, input, select, textarea, button {
    font-size: 13px;
    line-height: 1.5;
    font-family: 'Noto Sans KR', sans-serif;
    color: #666;
  }

  body, div, dl, dt, dd, ul, ol, li,
  h1, h2, h3, h4, h5, h6,
  pre, code, form, fieldset, legend, textarea, p, blockquote,
  th, td, input, select, textarea, button {
    margin: 0;
    padding: 0;
  }

  fieldset, img { border: 0 none; }

  dl, ul, ol, menu, li {
    list-style: none;
    vertical-align: middle;
  }

  a, a:link, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  img { vertical-align: middle; }

  button {
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }

  .clear:after {
    clear: both;
    content: '';
    display: block;
  }

  .tb { display: table; height: 100%; width: 100%; }
  .tbc { display: table-cell; vertical-align: middle; }

  .Abs { position: absolute; }
  .Abs_lc { position: absolute; left: 0; top: 50%; transform: translateY(-50%); }
  .Abs_rc { position: absolute; right: 0; top: 50%; transform: translateY(-50%); }

  /* Swiper 기본 스타일 override */
  .swiper-container {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
