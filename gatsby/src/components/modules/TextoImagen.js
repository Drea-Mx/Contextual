import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';

const TextoImagen = ({data}) => {
    const imageOneGatsby = getImage(data.imagen.asset);
    return(
        <TextoImagenContainer>
            <div className='iz'>
                <div className='image'>
                    <GatsbyImage
                        image={imageOneGatsby}
                        alt={data.imagen.alt}
                    />
                </div>
                <p className='meta'>{data.imagen.alt}</p>
            </div>
            <div className='de'>
                <div className={`texto ${data.capitalizar}`}>
                    <BlockContent
                        blocks={data._rawTexto}
                    />
                </div>
            </div>
        </TextoImagenContainer>
    )
}

const TextoImagenContainer = styled.section`
    display: flex;
    padding: 0 20px;
    margin-bottom: 50px;
    @media (max-width: 650px) {
        flex-direction: column;
        margin-bottom: 20px;
    }
    .iz, .de {
        width: 50%;
        @media (max-width: 650px) {
            width: 100%;
        }
    }
    .iz {
        p {
            padding-top: 5px;
            text-transform: uppercase;
        }
    }
    .de {
        .texto {
            margin-left: 20px;
            width: 80%;
            @media (max-width: 650px) {
                margin-left: 0;
                margin-top: 20px;
                width: 100%;
            }
             a {
                text-decoration: underline;
            }
            strong {
                font-weight: normal;
                color: var(--orange);
            }
            p {
                margin-bottom: 10px;
            }
        }
        .texto.true {
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
    }
`

export default TextoImagen