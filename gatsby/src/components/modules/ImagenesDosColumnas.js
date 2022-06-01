import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ImagenesDosColumnas = ({data}) => {
    const imageOneGatsby = getImage(data.imagen1.asset);
    const imageTwoGatsby = getImage(data.imagen2.asset);
    return(
        <ImagenesDosColumnasContainer>
            <div className='image1 element'>
                <div className='image'>
                    <GatsbyImage
                        image={imageOneGatsby}
                        alt={data.imagen1.alt}
                    />
                </div>
                <p>{data.caption1}</p>
            </div>
            <div className='image2 element'>
                <div className='image'>
                    <GatsbyImage
                        image={imageTwoGatsby}
                        alt={data.imagen2.alt}
                    />
                </div>
                <p>{data.caption2}</p>
            </div>

        </ImagenesDosColumnasContainer>
    )
}

const ImagenesDosColumnasContainer = styled.section`
    display: flex;
    @media (max-width: 650px) {
        padding: 20px;
        flex-direction: column;
        padding-bottom: 0;
    }
    .element {
        width: 50%;
        @media (max-width: 650px) {
            width: 100%;
            margin-bottom: 20px;
            p {
                padding: 5px 0 !important;
            }
        }
        p {
            padding: 5px 20px;
            font-family: var(--mono);
        }
        .image {
            position: relative;
            overflow: hidden;
            img {
                transform: scale(1.1);
            }
        }
    }
`

export default ImagenesDosColumnas