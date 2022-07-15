import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImagenFullscreen = ({data}) => {
    const imageOneGatsby = getImage(data.image.asset);
    return(
        <ImagenFullscreenContainer>
            <div className='imagen'>
                <GatsbyImage
                    image={imageOneGatsby}
                    alt={data.image.alt}
                />
            </div>
            <p className='caption meta'>{data.caption}</p>
        </ImagenFullscreenContainer>
    )
}

const ImagenFullscreenContainer = styled.section`
padding: 48px 0;
    .caption {
        padding: 5px 20px;
        text-transform: uppercase;
    }
`

export default ImagenFullscreen