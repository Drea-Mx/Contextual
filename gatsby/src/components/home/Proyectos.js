import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Proyecto from './Proyecto'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';
import { Link } from 'gatsby';
// import Search from '../layout/Search';


const Proyectos = ({data,query,resetFilter}) => {

    const [resizeListener, sizes] = useResizeAware();


    const [columnWidth, setColumnWidth] = useState(400);
    // Setting responsive column widths where sizes.width is the container width
    const getWidth = () => {
      if (sizes.width < 480) {
        setColumnWidth(Math.floor(sizes.width / 1));
      } else if (sizes.width < 640) {
        setColumnWidth(Math.floor(sizes.width / 1));
      } else if (sizes.width < 1280) {
        setColumnWidth(Math.floor(sizes.width / 2));
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
    function FilterArticulos(node){
        let paragraph = '';
        node.moduleArray.forEach(obj => {
            if (obj.campoDeTexto) {
                obj.campoDeTexto.forEach(obj => {
                    obj.children.forEach(obj => {
                        paragraph += obj.text;
                    })
                })
            }
        })
        return node.title.toLowerCase().includes(query) || node.headline.toLowerCase().includes(query) || node.seo.description.toLowerCase().includes(query) || paragraph.toLowerCase().includes(query)
    }
    const filteredArticulos=data.allSanityArticulosPage.nodes.filter(FilterArticulos);

    return(
        <Container>
        {resizeListener}
          <ResultContainer>
            {
              query && <div>
                <h2 key={query}>Resultados de "{query}" ({filteredArticulos.length})</h2>
              </div>
            }
            {(filteredArticulos.length===0)&&<NoSearchResults>No hay resultados</NoSearchResults>}

          </ResultContainer>


        <ProyectosContainer
        targetBlockWidth={columnWidth}
        responsive={true}
        >
            {filteredArticulos.map(( node ) => {
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

const NoSearchResults=styled.div`
    padding: 20px;
`

const Container = styled.div`
    position: relative;
    padding-top: 59px;
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
                padding: 5px 16px;
            }
            a {
                display: flex;
                text-align: center;
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
const ResultContainer = styled.div`
border-bottom: solid 1px black;
text-align: center;
h2 {
    border-top: solid 1px black;
    padding: 16px;
    font-size: 1rem;
}
`

const ProyectosContainer = styled(XMasonry)`
    width: 100%;
    margin-bottom: 100px;
    article {
        padding: 1.33rem 1.33rem 2.66rem 1.33rem;
        @media screen and (max-width: 650px){
            padding: 1.33rem;
        }
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
                max-width: 80%;
                @media screen and (max-width: 650px){
                    max-width: 100%;
                }
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



export default Proyectos
