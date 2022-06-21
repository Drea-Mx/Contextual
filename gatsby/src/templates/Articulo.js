import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Modules from '../components/modules/Modules';
import ProgressBar from "react-progressbar-on-scroll";

export default function SinglePostPage({ data: { articulo } }) {


    const logoGetDataImage = getImage(articulo.imagenDeCover.asset)
    const logoGetDataImageAlt = articulo.imagenDeCover.alt


    const fecha = new Date(articulo.fecha)

    const year = fecha.getFullYear() // 2019
    const month = fecha.getMonth() // 2019
    const dia = fecha.getDate() // 23


    function n(num, len = 2) {
        return `${num}`.padStart(len, '0');
      }

    return (
        <Layout>
            <ProjectContainer>
                <div className={`container ${articulo.cover}`}>
                    <div className='hero'>
                        <div className='image'>
                            <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={articulo.imagenDeCover ? logoGetDataImage : ''}
                                    alt={articulo.imagenDeCover ? logoGetDataImageAlt : ''}
                                />
                        </div>
                        <div className='text'>
                            <p className='fecha'>{`${n(dia)}.${n(month + 1)}.${n(year - 2000)}`}</p>
                            <h1>{articulo.title}</h1>
                            <h2>{articulo.headline}</h2>
                            <p className='lectura'>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</p>
                        </div>
                    </div>
                    <div className='coverMov'>
                        <h2>{articulo.headline}</h2>
                        <p className='lectura'>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</p>
                    </div>
                </div>
                <Modules editorialModule={articulo.moduleArray} />
                <div className='cortinilla'>
                    <div className='bar'>
                        <BarProgress
                            color="#EB4726"
                            gradient={false}
                            height={5}
                        />
                    </div>
                    <div className='top'>
                        <h2>{articulo.title}</h2>
                        <button>
                            <img src='/arrowDown.svg' alt='Arrow' />
                        </button>
                    </div>
                </div>
            </ProjectContainer>

        </Layout>
    )
}

const ProjectContainer = styled.section`
    position: relative;

    .cortinilla {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: white;
        .bar {
            div {
                position: absolute !important;
                top: 0;
                bottom: auto;
                transition: all 300ms ease-in-out;
            }
        }
        .top {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            h2 {
                font-size: 1rem;
                font-weight: normal;
            }
        }
    }
    .container.conThumbnail {
        .hero {
            display: flex;
            @media (max-width: 650px) {
                flex-direction: column-reverse;
            }
            .image {
                width: 50%;
                @media (max-width: 650px) {
                    width: 100%;
                }
            }
            .text {
                padding: 70px 50px ;
                box-sizing: border-box;
                display: block;
                width: 50%;
                @media (max-width: 650px) {
                    width: 100%;
                    padding: 50px 20px 20px;
                }
                p {
                    letter-spacing: 2px;
                    font-size: .7rem;
                    font-family: var(--mono);
                }
                .fecha {
                    padding-bottom: 50px;
                    @media (max-width: 650px) {
                        padding-bottom: 20px;
                        padding-top: 30px;
                    }
                }
                h1 {
                    color: var(--orange);
                    font-size: 4rem;
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                    @media (max-width: 850px) {
                        font-size: 2.5rem;
                    }
                }
                h2 {
                    margin-top: 50px;
                    font-size: 2rem;
                    @media (max-width: 850px) {
                        font-size: 1.5rem;
                    }
                    @media (max-width: 650px) {
                        display: none;
                    }
                }
                .lectura {
                    text-transform: uppercase;
                    padding-top: 50px;
                    @media (max-width: 650px) {
                        display: none;
                    }
                }
            }
        }
        .coverMov {
            padding: 20px;
            h2 {
                margin-bottom: 20px;
            }
            @media (min-width: 650px) {
                display: none;
            }
        }
    }

`

const BarProgress = styled(ProgressBar)`
    position: absolute;
    top: 0;
    bottom: auto;
`


export const query = graphql`
    query($slug: String!){
        articulo: sanityArticulosPage(slug: {
		current: {eq: $slug} }){
            title
            cover
            fecha
            imagenDeCover {
                alt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            headline
            lecturaDeXMinutos
            moduleArray {
                ... on SanityAudio {
                    _key
                    _type
                    codigo
                }
                ... on SanityBlockquote {
                    _key
                    _type
                    autor
                    frase
                }
                ... on SanityHeadline {
                    _key
                    _type
                    headlineText
                }
                ... on SanityImagenFullscreen {
                    _key
                    _type
                    caption
                    image {
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                        )
                    }
                    }
                }
                ... on SanityImagenesDosColumnas {
                    _key
                    _type
                    caption1
                    imagen1 {
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                        )
                    }
                    }
                    caption2
                    imagen2 {
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                        )
                    }
                    }
                }
                ... on SanityParrafoColumna {
                    _key
                    _type
                    _rawCampoDeTexto
                    capitalizar
                }
                ... on SanityParrafosColumnas {
                    _key
                    _type
                    _rawCampoDeTexto
                    capitalizar
                }
                ... on SanityTextoImagen {
                    _key
                    _type
                    _rawTexto
                    capitalizar
                    imagen {
                    alt
                    asset {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                        )
                    }
                    }
                }
                ... on SanityVideo {
                    _key
                    _type
                    caption
                    embedUrl
                }
            }
            tags {
                _id
                title
                slug {
                    current
                }
            }
            categoria {
                title
                slug {
                    current
                }
            }
        }
    }
`