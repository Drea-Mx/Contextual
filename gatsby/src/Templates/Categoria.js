import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import React, { useEffect, useState } from 'react'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports JSX plain sources
import useResizeAware from 'react-resize-aware';
import styled from 'styled-components'


export default function SingleCategoriaPage({ data: { categoria, proyectos, tagsSection } }) {



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




    
    return (
        <Layout>
            {resizeListener}
        <ProyectosContainer
            targetBlockWidth={columnWidth}
            responsive={false}
        >
            <XBlock width={2} >
                <div className='hero'>
                    <h3>Categoría</h3>
                    <div className='title'>
                        <img src={categoria.icono.asset.url} alt={categoria.icono.alt} />
                        <h1>{categoria.title}</h1>
                    </div>
                    <div className='tags'>
                    {tagsSection.nodes.map(node =>
                        [...new Set(node.tags)].map(tag => (
                        <p>{tag.title}</p>
                        ))
                    )}
                    </div>
                </div>
                
            </XBlock>
            {proyectos.nodes.map(( node ) => {

                return (

                    <XBlock width={1} >
                        <p>{node.title}</p>
                    </XBlock>
                )
                })}
        </ProyectosContainer>
            
        </Layout>
    )
}

const ProyectosContainer = styled(XMasonry)`
    width: 100%;
    .hero {
        background-color: var(--orange);
        padding: 50px 20px 20px 20px;
        border-radius: 0 0 24px 0;
        h3 {
            font-family: var(--mono);
            color: var(--white);
            text-transform: uppercase;
            margin-bottom: 20px;
            font-size: 0.8rem;
        }
        .title {
            display: flex;
            h1 {
                color: var(--white);
                font-size: 3rem;
            }
            img {
                width: 50px;
                filter: brightness(0%) invert(1);
            }
        }
        .tags {
            display: inline-block;
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

export const query = graphql`
    query($slug: String!){
        categoria: sanityCategoriasPage(slug: {
		current: {eq: $slug} }){
            title
            icono {
                alt
                asset {
                    url
                }
            }
        }
        proyectos: allSanityArticulosPage(filter: {categoria: {slug: {current: {eq: $slug}}}}) {
            nodes {
            title
            }
        }
        tagsSection: allSanityArticulosPage {
            nodes {
                tags {
                    title
                    slug {
                    current
                    }
                }
            }
        }
    }
`