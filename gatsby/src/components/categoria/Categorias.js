import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { XMasonry, XBlock } from "react-xmasonry";
import { Link } from 'gatsby';
import ProyectoCat from './ProyectoCat';

const Categorias = ( {data: { categoria, proyectos, tagsSection, categoriesSection } }) => {

    const containerRef = useRef(null);
    const [columnWidth, setColumnWidth] = useState(400);

    useEffect(() => {
      function handleResize() {
        if (!containerRef.current) return;
        const w = containerRef.current.offsetWidth;
        setColumnWidth(Math.floor(w / 4));
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <CategoriasContainer ref={containerRef}>
            <ProyectosContainer targetBlockWidth={columnWidth} responsive={false}>
                <XBlock width={2}>
                    <div className='hero'>
                        <h3 className='meta'>Formato</h3>
                        <div className='title'>
                            <h1 className='headline-2'>{categoria.title}</h1>
                        </div>
                        <div className='tags'>
                            <p className='meta'>Categorías</p>
                            <ul>
                                {tagsSection.nodes.map(( tag ) => (
                                    <li key={tag._id}>
                                        <Link to={`/etiquetas/${tag.slug.current}`}>{tag.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </XBlock>
                {proyectos.nodes.map(( proyecto ) => (
                    <XBlock width={proyecto.destacado ? '2' : '1'}>
                        <ProyectoCat key={proyecto._id} node={proyecto} />
                    </XBlock>
                ))}
            </ProyectosContainer>
            <ul className='categories'>
                {categoriesSection.nodes.map(( node ) => (
                    <li><Link to={`/categorias/${node.slug.current}`}><p>{node.title}</p></Link></li>
                ))}
            </ul>
        </CategoriasContainer>
    )
}

const ProyectosContainer = styled(XMasonry)`
    width: 100%;
`

const CategoriasContainer = styled.div`
    width: 100%;
    position: relative;
    padding-top: 60px;
    .categories {
        position: sticky;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: var(--white);
        padding-top: 5px;
        padding-bottom: 5px;
        border-top: solid 1px var(--darkgray);
        border-bottom: solid 1px var(--darkgray);
        @media (max-width: 680px) {
            overflow-x: scroll;
            white-space:nowrap;
        }
        li {
            padding-bottom: 5px;
            padding-top: 5px;
            @media (max-width: 680px) {
                text-align: center;
                padding: 5px 16px !important;
            }
            a { text-align: center; display: flex; }
            img { height: 15px; margin-right: 10px; filter: brightness(0%); align-self: center; }
            &:hover { a { color: var(--orange); } img { filter: brightness(100%); } }
        }
    }
    .hero {
        background-color: var(--gray);
        padding: 50px 20px 20px 20px;
        border-radius: 0 0 24px 0;
        margin-bottom: 25px;
        margin-right: 25px;
        @media screen and (max-width: 650px){ margin-right: 0; border-radius: 0; }
        h3 { margin-bottom: 28px; }
        .title { display: flex; }
        .tags {
            margin-top: 32px;
            .meta { margin-bottom: 18px; opacity: 0.75; }
            li { display: inline-block; margin-right: 10px; margin-bottom: 10px; }
            a {
                background-color: var(--darkgray);
                color: var(--black);
                padding: 8px 10px;
                border-radius: 3px;
                display: flex;
                flex-direction: row;
                border: solid 1px transparent;
                &:hover { border: solid 1px var(--orange); }
            }
        }
    }
    article {
        padding: 1.33rem 1.33rem 2.66rem 1.33rem;
        .icon { display: none; }
        .texto h2 { font-size: var(--headline-4); line-height: var(--lineheight); letter-spacing: 0.01rem; color: var(--orange); }
    }
    .undefined h2 { font-size: var(--headline-4); }
    .destacado {
        padding: 0;
        .texto {
            padding: 0 1.33rem 2.66rem 1.33rem;
            h2 { font-size: var(--headline-2); line-height: var(--lineheight); letter-spacing: 1%; }
            p { margin-bottom: 1.33rem; font-size: var(--paragraph); letter-spacing: .025rem; line-height: 132%; max-width: 80%; }
        }
    }
    .conThumbnail .texto h2 img { display: none; }
    .sinThumbnail {
        padding: 2.66rem 1.33rem 2.66rem;
        a { display: block; background-color: var(--orange); padding: 30px; border-radius: 40px; }
        .texto { .icon { filter: brightness(0%) invert(1); } h2, p { color: var(--white); } ul li { color: var(--white); } }
    }
    .podcast, .sinThumbnail { .texto h2 { font-size: var(--headline-3); } .icon { float: left; display: block; width: 40px; padding-top: 5px; } }
    .podcast { .texto { .icon { filter: brightness(0%); } h2 { color: var(--black); } } }
    .redondeado .image { border-radius: 24%; overflow: hidden; }
    .circulo .image { border-radius: 100%; overflow: hidden; }
`

export default Categorias