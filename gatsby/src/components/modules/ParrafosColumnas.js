import React from 'react'
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

const ParrafosColumnas = ({data}) => {
    return(
        <ParrafosContainer>
            <div className={`columns ${data.capitalizar}`} >
                <BlockContent
                blocks={data._rawCampoDeTexto}
                />
            </div>
        </ParrafosContainer>
    )
}

const ParrafosContainer = styled.section`
padding: 48px 20px;
.columns {
    column-count: 2;
    column-gap: 20px;
    max-width: 960px;
    margin: 50px auto;
    @media (max-width: 650px) {
        column-count: 1;
        width: 100%;
        p {
            padding: 8px 0;
        }
    }
    strong, a {
        font-weight: normal;
        color: var(--orange);
    }
    a {
        text-decoration: underline;
    }
}
.columns.true {
    p {
        &:first-child {
            &:first-letter {
                text-transform: uppercase;
                font-size: 3rem;
                color: var(--orange);
                float: left;
                margin-right: 5px;
                line-height: 1.009;
            }
        }
    }
        
}
`

export default ParrafosColumnas