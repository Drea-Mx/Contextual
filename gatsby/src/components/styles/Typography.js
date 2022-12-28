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
    --jumbo: 4.768rem;
    --headline-1: 3.815rem;
    --headline-2: 5.5vmin;
    --headline-3: 4.5vmin;
    --headline-4: 3.5vmin;
    --headline-5: 2.5vmin;
    --headline-6: 1.2rem;
    --paragraph: 1rem;
    --small: 0.8rem;
    --meta: 0.64rem;
    --detail: 0.512rem;
    --black: #0D0D0D;
      --white: #fff;
      --gray: #F7F7F7;
      --darkgray: #E6E6E6;
      --orange: #1A1A1A;
      --darkOrange: #E03715;
      --gra: #999999;
      overflow-wrap: break-word;
    --lineheight: 104%;
    // --headline-2: 3.052rem;
    // --headline-3: 2.441rem;
    // --headline-4: 1.953rem;
    // --headline-5: 1.563rem;
}

@media screen and (max-width: 600px){
    :root {
        --headline-2: 8.5vmin;
        --headline-3: 7.5vmin;
        --headline-4: 6.5vmin;
        --headline-5: 5.5vmin;
    }
}

html {
      scroll-behavior: smooth;
      font-size: 18px !important;
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
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar {
        display: none;
    }


    .jumbo, .jumbo p {
        font-size: var(--jumbo);
        line-height: var(--lineheight);
    }
    .headline-1, .headline-1 p {
        font-size: var(--headline-1);
        line-height: var(--lineheight);
        letter-spacing: .02rem;
    }
    .headline-2, .headline-2 p {
        font-size: var(--headline-2);
        line-height: var(--lineheight);
        letter-spacing: .02rem;
    }
    .headline-3, .headline-3 p {
        font-size: var(--headline-3);
        line-height: var(--lineheight);
        letter-spacing: .02rem;
    }
    .headline-4, .headline-4 p {
        font-size: var(--headline-4);
        line-height: var(--lineheight);
        letter-spacing: .02rem;
    }
    .headline-5, .headline-5 p {
        font-size: var(--headline-5);
    }
    .headline-6 {
        font-size: var(--headline-6);
    }
    .paragraph {
        font-size: var(--paragraph);
    }
    .small {
        font-size: var(--small);
    }
    .meta, .meta p {
        font-size: var(--meta) !important;
        text-transform: uppercase;
        line-height: 116%;
        letter-spacing: .05rem;
            font-family: var(--mono);
    }
    .detail {
        font-size: var(--detail);
    }
    p {
        font-size: var(--paragraph);
        line-height: 132%;
        letter-spacing: 0.01rem;
        @media screen and (max-width: 650px){
            letter-spacing: .02rem;
        }
    }

    .red a {
        letter-spacing: 0.025rem;
    }

`