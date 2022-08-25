import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Header = () => {

const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            logoSize
            navSize
            title
            logoBlanco {
                alt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                    )
                }
            }
            logoNegro {
                alt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                    )
                }
            }
        otrosLinks {
            _key
            texto
            url
            }
        }
        #Categories
        allSanityCategoriasPage {
            nodes {
            _key
            title
            slug {
                current
            }
            }
        }
        #Tags
        allSanityTagsPage {
            nodes {
                title
                _id
                slug {
                    current
                }
            }
        }
    }
`);

const logoNegroGetDataImage = getImage(data.sanitySettingsPage.logoNegro.asset)
const logoNegroGetDataImageAlt = data.sanitySettingsPage.logoNegro.alt

const [menu, setMenu] = useState(false);






const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: ${data.sanitySettingsPage.navSize}px;
    background: white;
    .logo {
        width: ${data.sanitySettingsPage.logoSize}px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
    }
    .ham {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 20px;
        .line {
            height: 2px;
            width: 100%;
            background-color: var(--black);
            margin-bottom: 5px;
            transition: all 250ms ease-in-out;
            position: absolute;
            opacity: 1;
            &:first-child {
                top: 0;
            }
            &:nth-child(2) {
                top: 6.5px;
            }
            &:last-child {
                bottom: 0;
            }
        }
    }
    .ham.open {
        .line{
            background-color: var(--gray);
            transition: background-color 300ms ease-in;
            
            &:first-child {
                top: 6.5px;
                transform: rotate(45deg);
            }
            &:last-child {
                bottom: 6.5px;
                transform: rotate(-45deg);
            }
            &:nth-child(2) {
                opacity: 0;
            }
        }
    }

    .over {
        display: ${menu ? 'block' : 'none'};
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        opacity: 0.25;
        z-index: 0;
    }

    .nav {
        width: 100%;
        background-color: var(--white);
        position: absolute;
        top: 0;
        display: ${menu ? 'block' : 'none'};
        padding-bottom: 50px;
        height: auto;
        @media (max-width: 680px) {
            overflow-y: scroll;
        }
        .top {
            border-bottom: solid 1px var(--gray);
            padding-bottom: 70px;
            @media (max-width: 680px) {
                padding-bottom: 40px;
            }
            .donate {
                a {
                    padding: 10px 15px;
                    background-color: var(--gray);
                    display: block;
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    border: solid 1px var(--darkgray);
                    border-radius: 3px;
                }
                @media (max-width: 680px) {
                    display: none;
                }
            }
            .x {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 30px;
                height: 20px;
                &:hover {
                    .line {
                        background-color: black !important;
                    }
                }
                .line {
                    width: 100%;
                    height: 2px;
                    background-color: var(--darkgray);
                    position: absolute;
                    transition: background-color 300ms ease-in;
                    &:first-child {
                        top: 9px;
                        transform: rotate(45deg);
                    }
                    &:last-child {
                        bottom: 9px;
                        transform: rotate(-45deg);
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                }
            }
        }
        .bot {
            width: 100%;
            display: flex;
            @media (max-width: 680px) {
                flex-direction: column;
            }
            .iz {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;
            @media (max-width: 680px) {
                width: 100%
            }
            h3 {
                text-transform: uppercase;
                font-family: var(--mono);
            }
            .categorias {
                display: block;
                padding-top: 20px;
                .icon {
                    margin-right: 10px;
                    margin-bottom: 10px;
                    display: inline-block;
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
                        .imagen {
                            display: block;
                            margin-right: 5px;
                            img {
                                height: 16px;
                            }
                        }
                        p {
                            color: var(--orange)
                        }
                    }
                }
            }
            .otros {
                padding-top: 25px;
                ul {
                    padding-top: 15px;
                    display: flex;
                    @media (max-width: 680px) {
                        display: block;
                        margin-bottom: 20px;
                    }
                    li {
                        margin-right: 20px;
                        a {
                            &:hover {
                                color: var(--orange);
                            }
                        }
                        @media (max-width: 680px) {
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .de {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;
            @media (max-width: 680px) {
                width: 100%
            }
            h3 {
                text-transform: uppercase;
                font-family: var(--mono);
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

`


    return(
        <HeaderContainer>
            <div className='logo'>
                <Link to='/'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoNegroGetDataImage}
                        alt={logoNegroGetDataImageAlt}
                    /> 
                </Link>
            </div>
            <button className={menu ? 'ham open' : 'ham'} onClick={() => setMenu(!menu)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            <button className='over'  onClick={() => setMenu(!menu)}>

            </button>
            <div className='nav'>
                <div className='top'>
                    <div className='donate'>
                        <a href='https://google.com'>¡Apóyanos!</a>
                    </div>
                    <div className='logo'>
                        <Link to='/'>
                            <GatsbyImage
                                style={{ height: "100%", width: "100%" }}
                                image={logoNegroGetDataImage}
                                alt={logoNegroGetDataImageAlt}
                            />
                        </Link>
                    </div> 
                    <button className='x' onClick={() => setMenu(!menu)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </button>
                </div>
                <div className='bot'>
                    <nav className='iz'>
                        <h3 className='meta'>Categorías</h3>
                        <ul className='categorias'>
                        {data.allSanityCategoriasPage.nodes.map(( node ) => {

                            return (
                                <li key={node._key} className='icon'>
                                    <Link to={`/categorias/${node.slug.current}`}>
                                        <div className='texto'>
                                            <p>{node.title}</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className='icon'>
                            <Link to={`/categorias`}>
                            <div className='texto'>
                                <p>Ver Todo</p>
                            </div>
                            </Link>
                        </li>
                        </ul>
                        <div className='otros'>
                            <h3 className='meta'>Otros Links</h3>
                            <ul>
                                <li>
                                    <Link to='/archivo'>Archivo</Link>
                                </li>
                                {data.sanitySettingsPage.otrosLinks.map(( link ) => {

                                return (
                                    <li key={link._key} className='red'>
                                        <a href={link.url} rel="noreferrer" target='_blank'>{link.texto}</a>
                                    </li>
                                )
                                })}

                            </ul>
                        </div>
                    </nav>
                    <nav className='de'>
                        <h3 className='meta'>Etiquetas</h3>
                        <ul className='tags'>
                        {data.allSanityTagsPage.nodes.map(( node ) => {
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
                    </nav>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header