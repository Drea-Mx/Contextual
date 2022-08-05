import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import React, { useState } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Modules from '../components/modules/Modules';
import ProgressBar from "react-progressbar-on-scroll";
import Seo from "../components/layout/seo"

export default function SinglePostPage({ data: { articulo } }) {


    const fecha = new Date(articulo.fecha)

    const year = fecha.getFullYear() // 2019
    const month = fecha.toLocaleString('default', { month: 'short' });
    const dia = fecha.getDate() // 23


    function n(num, len = 2) {
        return `${num}`.padStart(len, '0');
      }


      const [bar, setBar] = useState(false);

    return (
        <Layout>
            <Seo title={articulo.seo.title} description={articulo.seo.description} image={articulo.seo.image.asset.url} />
            <ProjectContainer>
                <div className={`container ${articulo.cover}`}>
                    <div className='hero'>
                        <div className='image'>
                            <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={articulo.imagenDeCover ? getImage(articulo.imagenDeCover.asset) : ''}
                                    alt={articulo.imagenDeCover ? articulo.imagenDeCover.alt : ''}
                                />
                        </div>
                        <div className='text'>
                            <p className='fecha meta'>{`${n(dia)}.${n(month)}.${n(year)}`}</p>
                            <h1 className='headline-2'>{articulo.title}</h1>
                            <h2 className='headline-4'>{articulo.headline}</h2>
                            <p className='lectura meta'>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</p>
                        </div>
                    </div>
                    <div className='coverMov'>
                        <h2 className='headline-4'>{articulo.headline}</h2>
                        <p className='lectura'>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</p>
                    </div>
                    <div className='deg'></div>
                </div>

                <Modules editorialModule={articulo.moduleArray} />
                <div className={bar ? 'cortinilla open' : 'cortinilla'}>
                    <div className='bar'>
                        <BarProgress
                            color="#EB4726"
                            gradient={false}
                            height={5}
                        />
                    </div>
                    <div className='top'>
                        <h2 className='headline-4'>{articulo.title}</h2>
                        <button onClick={() => setBar(!bar)}>
                            <img src='/arrowDown.svg' alt='Arrow' />
                        </button>
                    </div>
                    <div className='bot'>
                        <div className='cont'>
                            <div className='left'>
                                <p className='autor meta'>Autor</p>
                                <p className='autorDesc'><strong>{articulo.autor.title}</strong> {articulo.autor.descripcionAutor}</p>
                                <p className='fechaTag meta'>Fecha</p>
                                <p className='fecha'>{`${n(dia)}.${n(month + 1)}.${n(year - 2000)}`}</p>
                            </div>
                            <div className='der'>
                                <div className='categorias'>
                                    <p className='meta'>Categoría</p>
                                    <ul>
                                        <li className='icon'>
                                            <Link to={`/categorias/${articulo.categoria.slug.current}`}>
                                                <div className='texto'>
                                                    <p>{articulo.categoria.title}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className='tagsx'>
                                    <p className='meta'>Temas</p>
                                    <ul className='tags'>
                                        {articulo.tags.map(( node ) => {
                                            return (
                                                <li key={node._id} className='icon'>
                                                    <Link to={`/etiquetas/${node.slug.current}`}>
                                                        <div className='texto'>
                                                            <p>{node.title}</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </ProjectContainer>

        </Layout>
    )
}

const ProjectContainer = styled.section`
    position: relative;
    .cortinilla.open {
        top: auto !important;
        bottom: 0 !important;
    }
    .cortinilla {
        position: fixed;
        top: calc(100% - 50px);
        bottom: auto;
        left: 0;
        width: 100vw;
        background-color: white;
        transition: all 350ms ease-in-out;
        .bar {
            border-top: solid 1px #E6E6E6;
            div {
                position: absolute !important;
                top: 0;
                bottom: auto;
                transition: all 300ms ease-in-out;
            }
        }
        .top {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            padding: 10px 20px;
            height: 50px;
            position: relative;
            h2 {
                line-height: 140%;
                font-size: 1.2rem;
                letter-spacing: .02rem;
            }
            button {
                background-color: white;
                height: 40px;
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translateY(-50%);
                width: 35px;
                img {
                    width: 15px;
                    margin-right: 20px;
                    margin-left: 10px;
                }
            }
        }
        .bot {
            border-top: solid 1px #E6E6E6;
            .cont {
                padding: 24px;
                display: flex;
                @media (max-width: 680px) {
                    flex-direction: column;
                }
                .left, .der {
                    width: 50%;
                    @media (max-width: 680px) {
                        width: 100%;
                    }
                }
                .left {
                    .autorDesc {
                        padding-top: 10px;
                        padding-bottom: 30px;
                        width: 90%;
                        @media (max-width: 680px) {
                            width: 100%;
                            padding-bottom: 20px;
                        }
                        strong {
                            font-weight: normal;
                            color: var(--orange)
                        }
                    }
                    .fechaTag {
                        padding-bottom: 10px;
                    }
                }
                .der {
                    a {
                        font-size: 1rem;
                    }
                    @media (max-width: 680px) {
                        margin-top: 30px;
                    }
                    .categorias {
                       
                        ul {
                            margin-top: 10px;
                            margin-bottom: 10px;
                            display: block;
                        }
                        .icon {
                            margin-right: 10px;
                            display: inline-block;
                            margin-bottom: 10px;
                            a {
                                background-color: var(--gray);
                                padding: 10px;
                                border-radius: 3px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: row;
                                border: solid 1px transparent;
                                &:hover {
                                    border: solid 1px var(--orange);
                                }
                                .imagen {
                                    display: block;
                                    margin-right: 5px;
                                    img {
                                        height: 10px;
                                    }
                                }
                                p {
                                    align-self: center;
                                    justify-self: center;
                                    color: var(--orange);
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                    .tagsx {
                        margin-top: 50px;
                        @media (max-width: 680px) {
                            margin-top: 20px;
                        }
                    }
                    .tags {
                        display: block;
                        padding-top: 20px;
                        .icon {
                            margin-right: 10px;
                            display: inline-block;
                            margin-bottom: 10px;
                            a {
                                background-color: var(--gray);
                                padding: 8px 10px;
                                border-radius: 3px;
                                display: flex;
                                flex-direction: row;
                                border: solid 1px transparent;
                                &:hover {
                                    border: solid 1px var(--orange);
                                }
                                p {
                                    color: var(--orange)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .container {
        .text {
            img {
                display: none;
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
                    font-size: 3.052rem;
                    line-height: 108%;
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                    text-transform: uppercase;
                    letter-spacing: .01em;
                    @media (max-width: 850px) {
                        font-size: 2.5rem;
                    }
                }
                h2 {
                    margin-top: 50px;
                    font-size: 1.953rem;
                    line-height: 108%;
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
                    font-size: 0.64rem;
                    letter-spacing: .1rem;
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
                line-height: 108%;
            }
            @media (min-width: 650px) {
                display: none;
            }
        }
    }

    .container.sinThumbnail {
        color: white;
        text-align: center;
        @media (max-width: 650px) {
            text-align: left;
        }
        .hero {
            background-color: var(--orange);
            padding-top: 100px;
            @media (max-width: 650px) {
                padding: 100px 20px 0;
            }
            .text {
                .meta {
                    letter-spacing: 2px;
                }
            }
            .image {
                display: none;
            }
            h1 {
                padding-top: 50px;
                padding-bottom: 50px;
                font-size: 3.052rem;
                line-height: 108%;
                width: 80%;
                margin: 0 auto;
                text-transform: uppercase;
                @media (max-width: 650px) {
                    width: 100%;
                }
            }
            h2 {
                font-size: 1.563rem;
                line-height: 108%;
                padding-bottom: 50px;
                width: 80%;
                margin: 0 auto;
                @media (max-width: 650px) {
                    width: 100%;
                }
            }
        }
        .coverMov {
            display: none;
        }
        .deg {
            height: 300px;
            background: linear-gradient(to top,rgba(235,71,38,0),rgba(235,71,38,1));
            margin-bottom: -150px;
            @media (max-width: 650px) {
                height: 200px;
                margin-top: -2px;
            }
        }
    }
    .container.podcast {
        text-align: center;
        @media (max-width: 650px) {
            text-align: left;
        }
        .hero {
            background-color: var(--gray);
            padding-top: 100px;
            padding-bottom: 50px;
            @media (max-width: 650px) {
                padding: 100px 20px 50px;
            }
            .text {
                .meta {
                    letter-spacing: 2px;
                }
                img {
                    display: block;
                    width: 80px;
                    margin: 0 auto 25px;
                }
            }
            .lectura {
                display: none;
            }
            .image {
                display: none;
            }
            h1 {
                padding-top: 25px;
                padding-bottom: 25px;
                font-size: 3.052rem;
                line-height: 108%;
                max-width: 450px;
                margin: 0 auto;
                color: var(--orange);
                text-transform: uppercase;
            }
            h2 {
                font-size: 1.563rem;
                line-height: 108%;
                padding-bottom: 50px;
                width: 80%;
                margin: 0 auto;
                @media (max-width: 650px) {
                    width: 100%;
                }
            }
        }
        .coverMov {
            display: none;
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
                    url
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
            headline
            lecturaDeXMinutos
            autor {
                descripcionAutor
                title
            }
            seo {
                title
                description
                image {
                    asset {
                    url
                    }
                }
            }
            categoria {
                _id
                title
                slug {
                current
                }
            }
            tags {
                _id
                title
                slug {
                current
                }
            }
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