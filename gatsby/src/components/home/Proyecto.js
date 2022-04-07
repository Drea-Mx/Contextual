import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Proyecto = ({node}) => {

    const logoGetDataImage = getImage(node.imagenDeCover.asset)
    const logoGetDataImageAlt = node.imagenDeCover.alt

    return(
        <ProyectoContainer className={`${node.destacado === true ? 'destacado' : 'undefined'} ${node.cover && node.cover}`}>
            <Link to={`/articulos/${node.slug.current}`}>
                <div className='image'>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    />
                </div>
                <div className='texto'>
                    <h2><img className='icon' src={node.categoria.icono.asset.url} alt={node.categoria.icono.alt} />{node.title}</h2>
                    <p>{node.headline}</p>
                    <div className='meta'>
                        <ul>
                            <li>{node.fecha ? node.fecha : ''}</li>
                            <li>{node.categoria ?  node.categoria.title : ''}</li>
                            <li>{node.autor ? node.autor.title : ''}</li>
                            <li>{node.lecturaDeXMinutos ? node.lecturaDeXMinutos : ''} min</li>
                        </ul>
                    </div>
                </div>
                </Link>
        </ProyectoContainer>
    )
}

const ProyectoContainer = styled.article`
    .image {
        filter: grayscale(100%);
        margin-bottom: 10px;
    }
    .texto {
        h2 {
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 20px;
        }
        ul {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
            li {
                font-family: var(--mono);
                text-transform: uppercase;
                font-size: 0.7rem;
            }
        }
    }
    &:hover {
        .image {
            filter: grayscale(0);
        }
    }
`

export default Proyecto