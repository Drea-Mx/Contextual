import { createGlobalStyle } from 'styled-components';

import rowoff from '../../assets/fonts/RobotoMono-Regular.woff';
import rowoff2 from '../../assets/fonts/RobotoMono-Regular.woff2';
import rottf from '../../assets/fonts/RobotoMono-Regular.ttf';

import ntwoff from '../../assets/fonts/NTContextual-Regular.woff';
import ntwoff2 from '../../assets/fonts/NTContextual-Regular.woff2';

import ntitwoff from '../../assets/fonts/NTContextual-Italic.woff';
import ntitwoff2 from '../../assets/fonts/NTContextual-Italic.woff2';


export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Roboto Mono';
    src: url('${rowoff2}') format('woff2'),
        url('${rowoff}') format('woff'),
        url('${rottf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'NT Contextual';
    src: url('${ntwoff2}') format('woff2'),
        url('${ntwoff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'NT Contextual Italic';
    src: url('${ntitwoff2}') format('woff2'),
        url('${ntitwoff}') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

:root {
    --mono: 'Roboto Mono', monospace;
    --regular: 'NT Contextual', sans-serif;
    --italic: 'NT Contextual Italic', sans-serif;
    --black: #0D0D0D;
      --white: #fff;
      --gray: #F7F7F7;
      --darkgray: #E6E6E6;
      --orange: #EB4726;
      --darkOrange: #E03715;
      --gra: #999999;
      overflow-wrap: break-word;
}

html {
      scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
      background-color: var(--white);
        color: var(--black);
        font-family: var(--regular);
        font-size: 18px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar {
        display: none;
    }


    .jumbo {
        font-size: 4.768rem;
        line-height: 108%;
        letter-spacing: 1%;
    }
    .headline-1 {
        font-size: 3.815rem;
        line-height: 108%;
        letter-spacing: 1%;
    }
    .headline-2 {
        font-size: 3.052rem;
        line-height: 108%;
        letter-spacing: 1%;
    }
    .headline-3 {
        font-size: 2.441rem;
        line-height: 108%;
        letter-spacing: 1%;
    }
    .headline-4 {
        font-size: 1.953rem;
        line-height: 108%;
        letter-spacing: 1%;
    }
    .headline-5 {
        font-size: 1.563rem;
    }
    .headline-6 {
        font-size: 1.25rem;
    }
    .paragraph {
        font-size: 1rem;
    }
    .small {
        font-size: 0.8rem;
    }
    .meta {
        font-size: 0.64rem;
        text-transform: uppercase;
        line-height: 116%;
        letter-spacing: 0.5px;
    }
    .detail {
        font-size: 0.512rem;
    }
    p {
        line-height: 140%;
    }

`