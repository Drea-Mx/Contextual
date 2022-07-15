import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const ParrafoColumna = ({data}) => {
    return(
        <ParrafoColumnaContainer>
            <div className={`columns ${data.capitalizar}`}>
                <BlockContent
                    blocks={data._rawCampoDeTexto}
                />
            </div>
        </ParrafoColumnaContainer>
    )
}

const ParrafoColumnaContainer = styled.section`
padding: 48px 0;
.columns {
    column-count: 1;
    column-gap: 20px;
    max-width: 503px;
    margin: 0 auto;
    @media (max-width: 650px) {
        width: 100%;
        padding: 0 20px;
    }
    strong, a {
        font-weight: normal;
        color: var(--orange);
    }
    p {
            padding: 8px 0;
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

export default ParrafoColumna