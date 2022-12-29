import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';
import { Link } from 'gatsby';
import ProyectoCat from './ProyectoCat';


const Categorias = ( {data: { categoria, proyectos, tagsSection, categoriesSection } }) => {

    

    const [resizeListener, sizes] = useResizeAware();


    const [columnWidth, setColumnWidth] = useState(400);
    // Setting responsive column widths where sizes.width is the container width
    const getWidth = () => {
      if (sizes.width < 480) {
        setColumnWidth(Math.floor(sizes.width / 4));
      } else if (sizes.width < 640) {
        setColumnWidth(Math.floor(sizes.width / 4));
      } else if (sizes.width < 1280) {
        setColumnWidth(Math.floor(sizes.width / 4));
      } else if (sizes.width < 1536) {
        setColumnWidth(Math.floor(sizes.width / 4));
      } else if (sizes.width >= 1536) {
        setColumnWidth(Math.floor(sizes.width / 4));
      }
    };
    // Updating the variable on window resize
    useEffect(() => {
      function handleResize() {
        getWidth();
      }
      window.addEventListener("resize", handleResize);
      return (_) => {
        window.removeEventListener("resize", handleResize);
      };
    });




    return(
        <CategoriasContainer>
            {resizeListener}
            <ProyectosContainer
                targetBlockWidth={columnWidth}
                responsive={false}
            >
                <XBlock width={2} >
                    <div className='hero'>
                        <h3 className='meta'>Formato</h3>
                        <div className='title'>
                            <h1 className='headline-2'>{categoria.title}</h1>
                        </div>
                        <div className='tags'>
                            <p className='meta'>Categorías</p>
                            <ul>
                                {tagsSection.nodes.map(( tag ) => {
                                    return (
                                        <li key={tag._id}>
                                            <Link to={`/etiquetas/${tag.slug.current}`}>{tag.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            
                        </div>
                    </div>
                    
                </XBlock>
                {proyectos.nodes.map(( proyecto ) => {

                    return (
                        <XBlock
                            width={proyecto.destacado ? '2' : '1'}
                        >
                            <ProyectoCat key={proyecto._id} node={proyecto} />
                        </XBlock>
                    )
                    })}
            </ProyectosContainer>
            <ul className='categories'>
                {categoriesSection.nodes.map(( node ) => {
                    return (
                        <li><Link to={`/categorias/${node.slug.current}`}><p>{node.title}</p></Link></li>
                    )
                })}
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
        display: -webkit-flex;
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
            // display: block;
        }
        li {
            padding-bottom: 5px;
            padding-top: 5px;
            @media (max-width: 680px) {
                // display: inline-block;
                text-align: center;
                padding: 5px 16px !important;
            }
            a {
                text-align: center;
                display: flex;
            }
            img {
                height: 15px;
                margin-right: 10px;
                filter: brightness(0%);
                align-self: center;
            }
            &:hover {
                a {
                    color: var(--orange);
                }
                img {
                    filter: brightness(100%);
                }
            }
        }
    }
    .hero {
        background-color: var(--gray);
        padding: 50px 20px 20px 20px;
        border-radius: 0 0 24px 0;
        margin-bottom: 25px;
        margin-right: 25px;
        @media screen and (max-width: 650px){
            margin-right: 0;
            border-radius: 0;
        }
        h3 {
            margin-bottom: 28px;
        }
        .title {
            display: flex;
            h1 {
            }
        }
        .tags {
            margin-top: 32px;
            .meta {
                margin-bottom: 18px;
                opacity: 0.75;
            }
            li {
                display: inline-block;
                margin-right: 10px;
                margin-bottom: 10px;
            }
            a {
                background-color: var(--darkgray);
                color: var(--black);
                padding: 8px 10px;
                border-radius: 3px;
                display: flex;
                flex-direction: row;
                border: solid 1px transparent;
                &:hover {
                    border: solid 1px var(--orange);
                }
            }
        }
    }
    article {
        padding: 1.33rem 1.33rem 2.66rem 1.33rem;
        .icon {
            display: none;
        }
        .image {

        }
        .texto {
            h2 {
                font-size: var(--headline-4);
                line-height: var(--lineheight);
                letter-spacing: 0.01rem;
                color: var(--orange);
            }
        }
    }
    .undefined {
        h2 {
            font-size: var(--headline-4);
        }
    }
    
    .destacado {
        
        padding: 0;
        .texto {
            padding: 0 1.33rem 2.66rem 1.33rem;
            h2 {
                font-size: var(--headline-2);
                line-height: var(--lineheight);
                letter-spacing: 1%;
            }
            p {
                margin-bottom: 1.33rem;
                font-size: var(--paragraph);
                letter-spacing: .025rem;
                line-height: 132%;
                max-width: 80%;
            }
        }
    }
    .conThumbnail {
        .texto {
            h2 {
                img {
                    display: none;
                }
            }
        }
    }
    .sinThumbnail {
        padding: 2.66rem 1.33rem 2.66rem;
        a {
            display: block;
            background-color: var(--orange);
            padding: 30px;
            border-radius: 40px;
        }
        .texto {
            .icon {
                filter: brightness(0%) invert(1);
            }
            h2, p {
                color: var(--white);
            }
            ul {
                li {
                    color: var(--white);
                }
            }
        }
    }
    .podcast, .sinThumbnail {
        .texto {
            h2 {
                font-size: var(--headline-3);
            }
            .icon {
                float: left;
                display: block;
                width: 40px;
                padding-top: 5px;
            }
        }
    }
    .podcast {
        
        .texto {
            .icon {
                filter: brightness(0%);
            }
            h2 {
                color: var(--black);
            }
        }
    }
    .redondeado {
        .image {
            border-radius: 24%;
            overflow: hidden;
        }
    }
    .circulo {
        .image {
            border-radius: 100%;
            overflow: hidden;
        }
    }
`

export default Categorias