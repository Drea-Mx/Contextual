import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import Newsletter from './newsletter';


const Footer = () => {

const data = useStaticQuery(graphql`
query {
    
    sanityFooterPage {
        _rawTextoDescriptivo
        redesSociales {
            _key
            url
            icon {
                alt
                asset {
                    url
                }
            }
        }
        urlDona
        textoBotonDona
        textoBajoBoton
    }

    sanitySettingsPage {
        otrosLinks {
        _key
        texto
        url
        }
    }
    
}
`);


    return(
        <FooterContainer>
            <div className='top'>
                <div className='iz'>
                    <div className='texto'>
                        <BlockContent blocks={data.sanityFooterPage._rawTextoDescriptivo}  />
                    </div>
                    <ul className='redes'>
                    {data.sanityFooterPage.redesSociales.map(( red ) => {

                        return (
                            <li key={red._key} className='red'>
                                <a href={red.url} rel="noreferrer" target='_blank'>
                                        <img src={red.icon.asset.url} alt={red.icon.alt} /> 
                                </a>
                            </li>
                        )
                        })}

                    </ul>
                </div>
                <div className='de'>
                    {/* <Newsletter data={data} /> */}
                    <p>Tenemos un Substack en donde compartimos lo que nos inspira y lleva a pensar —o 'trippear'— el mundo que nos rodea. Suscríbete en: 
                        <span>&nbsp;
                            <a href="https://contextualmx.substack.com" target="_blank">
                                contextualmx.substack.com
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <div className='bot'>
                <div className='iz'>
                        <a href={data.sanityFooterPage.urlDona}>{data.sanityFooterPage.textoBotonDona}</a>
                        <p>{data.sanityFooterPage.textoBajoBoton}</p>
                </div>
                <div className='de'>
                        <h3 className='meta'>Otros Links</h3>
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
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
background-color: var(--gray);
.top {
    border-bottom: solid 1px var(--darkgray);
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
    }
.de {
    width: 50%;
    padding: 1.33rem;
    a {
        opacity: .5;
    }
    a:hover {
        opacity: 1;
        text-decoration: underline;
    }
    @media (max-width: 680px) {
        width: 100%;
    }
}
.iz {
    padding: 1.33rem;
    width: 50%;
    @media (max-width: 680px) {
        width: 100%;
        border-bottom: solid 1px var(--darkgray);
    }
    .texto {
        a {
            color: var(--orange);
        }
    }
    .redes {
        margin-top: 2.66rem;
        display: flex;
        @media (max-width: 680px) {
            justify-content: center;
            img {
                width: 25px !important;
                margin-right: 1.33rem !important;
            }
        }
        img {
            margin-right: 15px;
            width: 18px;
        }
    }
}
}
.bot {
    display: flex;
    padding-bottom: 50px;
    @media (max-width: 680px) {
        flex-direction: column;
    }
    .iz {
        width: 50%;
        padding: 50px 1.33rem;
        @media (max-width: 680px) {
            width: 100%;
            border-bottom: solid 1px var(--darkgray);
        }
        a {
            display: inline-block;
            background-color: var(--orange);
            color: var(--white);
            padding: 10px 15px;
            text-transform: uppercase;
            font-family: var(--mono);
            border-radius: 4px;
            margin-bottom: 1.33rem;
            @media (max-width: 680px) {
                display: block;
                text-align: center;
            }
        }
        p {
            max-width: 500px;
        }
    }
    .de {
        width: 50%;
        padding: 50px 1.33rem;
        @media (max-width: 680px) {
            width: 100%;
        }
        h3 {
            text-transform: uppercase;
            font-family: var(--mono);
        }
        ul {
            margin-top: 1.33rem;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
        }
    }
}
    
`

export default Footer