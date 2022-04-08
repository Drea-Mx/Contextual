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
                        <Newsletter />
                </div>
            </div>
            <div className='bot'>
                <div className='iz'>
                        <a href={data.sanityFooterPage.urlDona}>{data.sanityFooterPage.textoBotonDona}</a>
                        <p>{data.sanityFooterPage.textoBajoBoton}</p>
                </div>
                <div className='de'>
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
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
.top {
    border-bottom: solid 1px var(--darkgray);
    display: flex;
.de {
    width: 50%;
    padding: 20px;
}
.iz {
    padding: 20px;
    width: 50%;
    .texto {
        a {
            color: var(--orange);
        }
    }
    .redes {
        margin-top: 50px;
        display: flex;
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
    .iz {
        width: 50%;
        padding: 50px 20px;
        a {
            display: inline-block;
            background-color: var(--orange);
            color: var(--white);
            padding: 10px 15px;
            text-transform: uppercase;
            font-family: var(--mono);
            border-radius: 4px;
            margin-bottom: 20px;
        }
        p {
            max-width: 500px;
        }
    }
    .de {
        width: 50%;
        padding: 50px 20px;
        h3 {
            font-size: .7rem;
            text-transform: uppercase;
            font-family: var(--mono);
        }
        ul {
            margin-top: 20px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
        }
    }
}
    
`

export default Footer