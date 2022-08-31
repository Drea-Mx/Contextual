import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Proyecto = ({node}) => {


    const date = new Date(node.fecha)

    const year = date.getFullYear() // 2019
    const month = date.toLocaleString('default', { month: 'short' });
    const dia = date.getDate() // 23


    function n(num, len = 2) {
        return `${num}`.padStart(len, '0');
      }



    return(
        <ProyectoContainer className={`${node.destacado === true ? 'destacado' : 'undefined'} ${node.cover && node.cover} ${node.thumbnailForma && node.thumbnailForma}` }>
            <Link to={`/contenido/${node.slug.current}`}>
                <div className='image'>
                    {node.imagenDeCover && 
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={getImage(node.imagenDeCover.asset)}
                            alt={node.imagenDeCover.alt}
                        />
                    }
                </div>
                <div className='texto'>
                    <h2>{node.title}</h2>
                    <p className={`${node.showHideHeadline === true ? 'showHeadline' : 'hideHeadeline'}`}>{node.headline}</p>
                    <div className='meta'>
                        <ul>
                            <li>{`${n(dia)}.${n(month)}.${n(year)}`}</li>
                            <li>{node.categoria ?  node.categoria.title : ''}</li>
                            <li className='autores'>
                            {node.autor.map(( autor ) => {
                                            return (
                                                <span key={autor._id} className='autorDesc'> {autor.title} <span className='slash'>/</span> </span>
                                            )
                                        })}
                                {node.autor ? node.autor.title : ''}</li>
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
        transition: filter 300ms ease-in;
        margin-bottom: 10px;
        @media (max-width: 650px) {
            filter: grayscale(0);
        }
    }
    .texto {
        h2 {
            margin-bottom: 10px;
            letter-spacing: .05rem;
        }
        p {
            margin-bottom: 20px;
            font-size: 1.25rem;
            letter-spacing: .025rem;
	        line-height: 132%;
        }
        ul {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
            li {
                font-family: var(--mono);
                text-transform: uppercase;
                font-size: 0.64rem;
            }
            .autores {
                display: none;
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