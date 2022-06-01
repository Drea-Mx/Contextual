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
            <p className='caption'>{data.caption}</p>
        </ImagenFullscreenContainer>
    )
}

const ImagenFullscreenContainer = styled.section`
padding-top: 30px;
margin-bottom: 50px;
    .caption {
        padding: 5px 20px;
    }
`

export default ImagenFullscreen