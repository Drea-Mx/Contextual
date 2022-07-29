import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';
import { Link } from 'gatsby';
import Proyecto from '../home/Proyecto';
import ProyectoCat from './ProyectoCat';


const Categorias = ( {data: { categoria, proyectos, tagsSection } }) => {

    

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
                        <h3 className='meta'>Categoría</h3>
                        <div className='title'>
                            <h1 className='headline-2'>{categoria.title}</h1>
                        </div>
                        <div className='tags'>
                            <p className='meta'>ETIQUETAS</p>
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
                {tagsSection.nodes.map(( node ) => {
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
            display: block;
        }
        li {
            padding-bottom: 5px;
            padding-top: 5px;
            @media (max-width: 680px) {
                display: inline-block;
                padding: 5px 20px;
            }
            a {
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
        padding: 50px 10px 10px;
        .icon {
            display: none;
        }
        .image {
        }
        .texto {
            h2 {
                text-transform: uppercase;
                color: var(--orange);
            }
        }
    }
    
    .destacado {
        
        padding: 0;
        .texto {
            padding: 10px;
            h2 {
                font-size: 3rem;
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
        padding: 10px;
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
                font-size: 3rem;
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
            border-radius: 80px;
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