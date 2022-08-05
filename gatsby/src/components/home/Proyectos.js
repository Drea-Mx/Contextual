import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Proyecto from './Proyecto'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';
import { Link } from 'gatsby';


const Proyectos = ({data}) => {

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
        <Container>
        {resizeListener}
        <ProyectosContainer
        targetBlockWidth={columnWidth}
        responsive={false}
        >
            {data.allSanityArticulosPage.nodes.map(( node ) => {
                return (
                    <XBlock
                    width={node.destacado ? '2' : '1'}
                    >
                        <Proyecto node={node} key={node._id} />
                    </XBlock>
                )
            })}

        </ProyectosContainer>

        <ul className='categories'>
            {data.allSanityCategoriasPage.nodes.map(( node ) => {
                return (
                    <li><Link to={`/categorias/${node.slug.current}`}><p>{node.title}</p></Link></li>
                )
            })}
        </ul>
        </Container>
    )
}

const Container = styled.div`
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
`

const ProyectosContainer = styled(XMasonry)`
    width: 100%;
    margin-bottom: 100px;
    article {
        padding: 48px 24px 48px;
        .icon {
            display: none;
        }
        .image {

        }
        .texto {
            h2 {
                font-size: 1.563rem;
                text-transform: uppercase;
                color: var(--orange);
            }
        }
    }
    .undefined {
        h2 {
            font-size: 1.563rem;
        }
    }
    
    .destacado {
        
        padding: 0;
        .texto {
            padding: 10px;
            h2 {
                font-size: 2.441rem;
                line-height: 108%;
                letter-spacing: 1%;
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
        padding: 48px 24px 48px;
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
                font-size: 2.441rem;
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



export default Proyectos