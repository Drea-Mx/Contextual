import React from 'react'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const largeQuote = ({data}) => {
    return(
        <LargeQuoteContainer>
            <div className='frase'>
                <div className='ri'>
                    <div className='texto headline-5'>
                        <BlockContent
                                blocks={data._rawTexto}
                            />
                    </div>
                    <p className='meta'>
                        <BlockContent
                            blocks={data._rawDescripcion}
                        />
                    </p>
                </div>
                
            </div>
        </LargeQuoteContainer>
    )
}

const LargeQuoteContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 48px 0;
    text-align: center;
    background-color: var(--gray);
    @media (max-width: 650px) {
        padding: 50px 20px;
    }
    .frase {
        width: 80%;
        margin: 0 auto;
        @media (max-width: 650px) {
            width: 100%;
        }
        .meta {
            margin-top: 20px;
            text-transform: uppercase;
        }
    }
`

export default largeQuote