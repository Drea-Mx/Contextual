import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Header = () => {

const data = useStaticQuery(graphql`
    query {
        sanitySettingsPage {
            title
            logoBlanco {
                alt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
            logoNegro {
                alt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
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
            icono {
                alt
                asset {
                url
                }
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


const logoGetDataImage = getImage(data.sanitySettingsPage.logoBlanco.asset)
const logoGetDataImageAlt = data.sanitySettingsPage.logoBlanco.alt

const logoNegroGetDataImage = getImage(data.sanitySettingsPage.logoNegro.asset)
const logoNegroGetDataImageAlt = data.sanitySettingsPage.logoNegro.alt

const [menu, setMenu] = useState(false);






const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, rgba(235,71,38,0), rgba(235,71,38,1));
    .logo {
        width: 150px;
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
            background-color: var(--white);
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

    .nav {
        width: 100%;
        background-color: var(--white);
        position: absolute;
        top: 0;
        display: ${menu ? 'block' : 'none'};
        padding-bottom: 50px;
        height: auto;
        .top {
            border-bottom: solid 1px var(--gray);
            padding-bottom: 70px;
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
            }
            .x {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 30px;
                height: 20px;
                .line {
                    width: 100%;
                    height: 2px;
                    background-color: var(--darkgray);
                    position: absolute;
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
            .iz {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;
            h3 {
                text-transform: uppercase;
                font-size: 0.75rem;
                font-family: var(--mono);
            }
            .categorias {
                display: flex;
                padding-top: 20px;
                .icon {
                    margin-right: 10px;
                    a {
                        background-color: var(--gray);
                        padding: 8px 10px;
                        border-radius: 3px;
                        display: flex;
                        flex-direction: row;
                        .imagen {
                            display: block;
                            width: 15px;
                            margin-right: 5px;
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
                    li {
                        margin-right: 20px;
                    }
                }
            }
        }
        .de {
            margin-top: 20px;
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;
            h3 {
                text-transform: uppercase;
                font-size: 0.75rem;
                font-family: var(--mono);
            }
            .tags {
                display: flex;
                padding-top: 20px;
                .icon {
                    margin-right: 10px;
                    a {
                        background-color: var(--gray);
                        padding: 8px 10px;
                        border-radius: 3px;
                        display: flex;
                        flex-direction: row;
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
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    /> 
                </Link>
            </div>
            <button className={menu ? 'ham open' : 'ham'} onClick={() => setMenu(!menu)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
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
                        <h3>Categorías</h3>
                        <ul className='categorias'>
                        {data.allSanityCategoriasPage.nodes.map(( node ) => {

                            return (
                                <li key={node._key} className='icon'>
                                    <Link to={`/categorias/${node.slug.current}`}>
                                        <div className='imagen'>
                                            <img src={node.icono.asset.url} alt={node.icono.alt} /> 
                                        </div>
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
                            <h3>Otros Links</h3>
                            <ul>
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
                        <h3>Etiquetas</h3>
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