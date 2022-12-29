import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import React, { useState } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Modules from '../components/modules/Modules';
import ProgressBar from "react-progressbar-on-scroll";
import Seo from "../components/layout/seo"

export default function SinglePostPage({ data: { articulo } }) {


    let dt = new Date(articulo.fecha)


    dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
    const offset = +210; //Timezone offset for EST in minutes.
    const estDate = new Date(dt.getTime() + offset*60*1000);

    const year = estDate.getFullYear() // 2019
    const month = estDate.toLocaleString('es-ES', { month: 'short' });
    const dia = estDate.getDate() // 23


    function n(num, len = 2) {
        return `${num}`.padStart(len, '0');
      }


      const [bar, setBar] = useState(false);

    return (
        <Layout>
            <Seo title={articulo.seo.title ? articulo.seo.title : articulo.title} description={articulo.seo.description ? articulo.seo.description : 'Contextual'} image={articulo.seo.image ? articulo.seo.image.asset.url : '/screenshot.png'} />
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
                            <div className='data'>
                                <p className='fecha meta'>
                                    <span><p>{articulo.categoria.title}</p></span>
                                    <span>{`${n(dia)}.${n(month)}.${n(year)}`}</span>
                                </p>
                                <h1 className='headline-2'>{articulo.title}</h1>
                                <h2 className='headline-5'>{articulo.headline}</h2>
                                <p className='lectura meta'>
                                    POR 
                                        {articulo.autor.map(( autor ) => {
                                            return (
                                                <span key={autor._id} className='autorDesc'> {autor.title} <span className='slash'>/</span> </span>
                                            )
                                        })}
                                    <span>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</span>
                                </p>
                            </div>
                        </div>
                        <div className='overlay'></div>

                    </div>
                    <div className='coverMov'>
                        <h2 className='headline-4'>{articulo.headline}</h2>
                        <p className='lectura'>{`Lectura de ${articulo.lecturaDeXMinutos} min.`}</p>
                    </div>
                </div>

                <Modules editorialModule={articulo.moduleArray} />

                {articulo.linksDeReferencia.length === 0 ?
                    ''
                    :
                    <LinksReferencia>
                        <div className='linksCont'>
                            <p>Links de Referencia<img src='/flecha.svg' alt='Flecha abajo' /></p>
                            <ul>
                                {articulo.linksDeReferencia.map(( link ) => {
                                    return (
                                        <li key={link._key}>
                                            <a rel="noreferrer" target='_blank' href={link.url}>{link.texto}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </LinksReferencia>
                }

                {articulo.postRelacionados.length === 0 ?
                    ''
                    :
                
                    <RelatedPost>
                        <p className='headline-6'>Sigue Leyendo<img src='/flecha.svg' alt='Flecha abajo' /></p>
                        <ul className='posts'>
                            {articulo.postRelacionados.map(( post ) => {
                                return (
                                    <li key={post._id}>
                                        <Link to={`/contenido/${post.slug.current}`}>
                                            <div className='image'>
                                                <GatsbyImage
                                                        style={{ height: "100%", width: "100%" }}
                                                        image={post.imagenDeCover ? getImage(post.imagenDeCover.asset) : ''}
                                                        alt={post.imagenDeCover ? post.imagenDeCover.alt : ''}
                                                    />
                                            </div>
                                            <h2 className='headline-4'>{post.title}</h2>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </RelatedPost>
                }
                <div className={bar ? 'cortinilla open' : 'cortinilla'}>
                    <div className='bar'>
                        <BarProgress
                            color="#000000"
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
                                <p className='autor meta'>Escrito Por</p>
                                <div className='autores'>
                                    {articulo.autor.map(( autor ) => {
                                        return (
                                            <p key={autor._id} className='autorDesc'><strong>{autor.title}</strong>{autor.descripcionAutor}</p>
                                        )
                                    })}
                                </div>
                                
                                <p className='fechaTag meta'>Fecha</p>
                                <p className='fecha'>{`${n(dia)}.${n(month)}.${n(year - 2000)}`}</p>
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
        z-index: 999;
        background-color: white;
        transition: all 350ms ease-in-out;
        .bar {
            border-top: solid 1px black;
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
                font-size: var(--headline-6);
                letter-spacing: .02rem;
                @media screen and (max-width: 650px){
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 85%;
                }
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
                padding: 1.33rem;
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
                    .autores {
                        margin-top: 0.5rem;
                        margin-bottom: 1.33rem;
                    }
                    .fecha {
                        // letter-spacing: 0.1rem;
                        text-transform: capitalize;
                    }
                    .autorDesc {
                        padding-top: 0;
                        padding-bottom: 5px;
                        width: 90%;
                        @media (max-width: 680px) {
                            width: 100%;
                            padding-bottom: 0;
                        }
                        strong {
                            font-weight: normal;
                            color: black;
                            margin-right: 15px;
                            display: block;
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
                                    border: solid 1px black;
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
                                    color: black;
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
                                    border: solid 1px black;
                                }
                                p {
                                    color: black
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

    .container.typePost {
        .hero {
            position: relative;
            .image {
                filter: grayscale(100%);
                height: auto;
                @media (max-width: 700px) {
                    display: none;

                }
            }
            .overlay {
                    position: relative;
                    top: 0;
                    height: 250px;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    z-index: 1;
                    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);                
                }
            .text {
                position: relative;
                top: 0;
                background-color: black;
                color: white;
                text-align: center;
                padding-bottom: 0px;
                padding-top: 8.3rem;
                padding-bottom: 4rem;
                @media (max-width: 700px) {
                    padding-top: 2.66rem;
                }
                .data {
                    position: relative;
                    z-index: 1;
                    width: 80%;
                    margin: 0 auto;
                    @media (max-width: 700px) {
                        width: 100%;
                        padding: 2.66rem 1.33rem 1.33rem;
                    }
                    .fecha {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 30px;
                        span {
                            p {
                                display: inline;
                                color: var(--gra);
                            }
                        }
                    }
                    h1 {
                        padding-bottom: 40px;
                    }
                    h2 {
                        padding-bottom: 30px;
                    }
                    .lectura {
                        font-weight: 100 !important;
                        display: block;
                        margin-bottom: 3px;
                        .autorDesc {
                            &:last-child {
                                span.slash {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
        .coverMov {
            display: none;
        }
    }

    .lectura.meta {
        padding-right: 2.66rem;
        padding-left: 2.66rem;
        line-height: 140%;
        @media screen and (min-width: 1500px) {
            padding-right: 5rem;
            padding-left: 5rem;
        }
    }

    .container.conThumbnail {
        .hero {
            display: flex;
            align-items: center;
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
                    padding: 2.66rem 1.33rem 1.33rem;
                }
                p {
                    letter-spacing: 2px;
                    font-family: var(--mono);
                }
                .fecha {
                    padding-top: 2.66rem;
                    padding-bottom: 2.66rem;
                    display: flex;
                    justify-content: space-between;
                    span {
                        p {
                            display: inline;
                        }
                    }
                    @media (max-width: 650px) {
                        padding-bottom: 1.33rem;
                        padding-top: 1.66rem;
                    }
                }
                h1 {
                    color: black;
                    font-size: var(--headline-2);
                    line-height: 108%;
                    box-sizing: border-box;
                    display: block;
                    text-align: center;
                    width: 100%;
                    letter-spacing: .01em;
                    @media (max-width: 850px) {
                        font-size: 1.953rem;
                    }
                }
                h2 {
                    margin-top: 1.33rem;
                    font-size: var(--headline-5);
                    line-height: 132%;
                    letter-spacing: 0.03rem;
                    text-align: center;
                    @media (max-width: 850px) {
                        font-size: 1rem !important;
                    }
                    @media (max-width: 650px) {
                        display: none;
                    }
                }
                .lectura {
                    text-transform: uppercase;
                    padding-top: 2.66rem;
                    font-size: var(--meta);
                    letter-spacing: 1px;
                    text-align: center;
                    strong {
                        display: block;
                        margin-bottom: 5px;
                    }
                    span.autorDesc {
                        &:last-child {
                            span {
                                display: none;
                            }
                        }
                    }
                    @media (max-width: 650px) {
                        display: none;
                    }
                }
            }
        }
        .coverMov {
            padding: 1.33rem;
            h2 {
                margin-bottom: 1.33rem;
                line-height: 108%;
                font-size: 1rem;
                line-height: 140%;
                letter-spacing: 0.02rem;
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
            background-color: black;
            padding-top: 100px;
            padding-bottom: 2.66rem;
            @media (max-width: 650px) {
                padding: 5.5rem 1.33rem 0;
            }
            .text {
                .meta {
                    letter-spacing: 1px;
                }
            }
            .image {
                display: none;
            }
            h1 {
                padding-top: 50px;
                padding-bottom: 50px;
                font-size: var(--headline-2);
                line-height: 108%;
                width: 80%;
                margin: 0 auto;
                text-transform: uppercase;
                @media (max-width: 650px) {
                    width: 100%;
                }
            }
            h2 {
                font-size: var(--headline-5);
                line-height: 108%;
                padding-bottom: 2.66rem;
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
            padding: 100px 20px 50px;
            @media (max-width: 650px) {
                padding: 100px 20px 50px;
            }
            .text {
                .data {
                    .fecha {
                        display: flex;
                        justify-content: space-between;
                        span {
                            p {
                                display: inline;
                            }
                        }
                        @media (max-width: 650px) {
                            padding-bottom: 20px;
                            padding-top: 30px;
                        }
                    }
                }
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
                font-size: var(--headline-2);
                line-height: 108%;
                max-width: 550px;
                margin: 0 auto;
                color: var(--orange);
            }
            h2 {
                font-size: var(--headline-5);
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


const LinksReferencia = styled.section`
    border-top: solid 1px var(--gray);
    padding: 20px;
    .linksCont {
        width: 350px;
        margin: 0 auto;
        ul {
            li {
                display: block;
            }
        }
    }
    p {
        margin-bottom: 10px;
        img {
            margin-left: 10px;
            width: 10px;
        }
    }
    a:hover {
        text-decoration: underline;
    }
`

const RelatedPost = styled.section`
    border-top: solid 1px var(--gray);
    padding: 1rem 1.33rem 2.66rem 1.33rem;
    p {
        margin-bottom: 20px;
        img {
            margin-left: 10px;
            width: 10px;
        }
    }
    ul.posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        h2 {
            margin-top: .5rem;
            @media (max-width: 680px) {
                margin-top: 5px;
                font-size: 0.8rem;
            }
        }
    }
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
            linksDeReferencia {
                _key
                texto
                url
            }
            postRelacionados {
                _id
                title
                slug {
                    current
                }
                imagenDeCover {
                    alt
                    asset {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            outputPixelDensities: 1.5
                            placeholder: BLURRED
                        )
                    }
                }
            }
            headline
            lecturaDeXMinutos
            autor {
                title
                _id
                descripcionAutor
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
                    _rawAutor
                    frase
                }
                ... on SanityLargeQuote {
                    _key
                    _type
                    _rawTexto
                    _rawDescripcion
                }
                ... on SanityHeadline {
                    _key
                    _type
                    headlineText
                }
                ... on SanityImagenFullscreen {
                    _key
                    _type
                    _rawCaption
                    imageSize
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
                    _rawCaption1
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
                    _rawCaption2
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
                    _rawCaption
                    embedUrl
                    videoSize
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