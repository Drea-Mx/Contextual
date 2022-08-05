import React from 'react'
import styled from 'styled-components'

const Blockquote = ({data}) => {
    return(
        <BlockquoteContainer>
            <div className='frase'>
                <div className='ri'>
                    <h2 className='headline-3'>{data.frase}</h2>
                    <p className='meta'>{data.autor}</p>
                </div>
                
            </div>
        </BlockquoteContainer>
    )
}

const BlockquoteContainer = styled.section`
    width: 650px;
    margin: 0 auto;
    padding: 48px 0;
    @media (max-width: 650px) {
        width: 100%;
        padding: 50px 20px 0;
        border-top: solid 1px #E6E6E6;
        margin-top: 20px;
        margin-bottom: 0px;
        @media (max-width: 650px) {
            border: none;
        }
    }
    .frase {
        display: flex;
        h2.quote {
            font-size: 4.768rem;
            margin-right: 10px;
            padding-top: 0px;
            line-height: 100%;
        }
        .ri {
            h2 {
                @media (max-width: 850px) {
                    font-size: 2rem;
                }
            }
            p {
                margin-top: 1rem;
                text-transform: uppercase;
            }
        }
    }
    p {
        color: var(--orange);
    }
`

export default Blockquote