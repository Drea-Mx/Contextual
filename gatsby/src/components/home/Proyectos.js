import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Proyecto from './Proyecto'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';


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
        <div>
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
        </div>
    )
}

const ProyectosContainer = styled(XMasonry)`
    width: 100%;
    
    .destacado {
        
        padding: 0;
        .texto {
            padding: 10px;
            h2 {
                font-size: 3rem;
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
    article {
        padding: 10px;
        .icon {
            display: none;
        }
        .texto {
            h2 {
                text-transform: uppercase;
                color: var(--orange);
            }
        }
    }

`



export default Proyectos