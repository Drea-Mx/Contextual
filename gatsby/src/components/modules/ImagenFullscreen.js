import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const ImagenFullscreen = ({data}) => {
    const imageOneGatsby = getImage(data.image.asset);



const ImagenFullscreenContainer = styled.section`
width: ${data.imageSize}%;
margin: 0 auto;
padding: 48px 0;
    .caption {
        padding: 5px 20px;

        @media (max-width: 680px) {
            padding: 8px 0;
        }
    }
    .meta {
        text-transform: none;
    }
        a {
            color: #666666;
            text-decoration: underline;
        }
`


    return(
        <ImagenFullscreenContainer>
            <div className='imagen'>
                <GatsbyImage
                    image={imageOneGatsby}
                    alt={data.image.alt}
                />
            </div>
            <div className='caption meta'>
                    <BlockContent
                        blocks={data._rawCaption}
                    />
            </div>
        </ImagenFullscreenContainer>
    )
}



export default ImagenFullscreen