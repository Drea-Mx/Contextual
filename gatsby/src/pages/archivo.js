import React from 'react'
import Layout from "../components/layout/layout";
import { graphql, Link } from "gatsby";
import Seo from "../components/layout/seo"
import styled from 'styled-components';

export const data = graphql`
  query {
    allSanityArticulosPage(
    filter: {archivo: {eq: true}}
    sort: {fields: fecha, order: ASC}
  ) {
    nodes {
      title
      fecha
      _id
      slug {
        current
      }
      autor {
        title
      }
      categoria {
        title
      }
    }
  }

#Categorias
    allSanityCategoriasPage(sort: {fields: order, order: ASC}) {
    nodes {
      _id
      title
      slug {
        current
      }
    }
  }
  sanitySettingsPage {
    title
    descriptionSite
    siteImage {
      asset {
        url
      }
    }
    
  }


  }

  
`;

const ArchivoPage = ({data}) => {
  return(
    <Layout>
        <Seo title={data.sanitySettingsPage.title} description={data.sanitySettingsPage.descriptionSite} image={data.sanitySettingsPage.siteImage.asset.url} />
        <Container>
          <div className='hero'>
            <h1 className='headline-1'>Archivo</h1>
          </div>
          <ArchivoContainr>
            {data.allSanityArticulosPage.nodes.map(( node ) => {

let dt = new Date(node.fecha)


dt.setTime(dt.getTime()+dt.getTimezoneOffset()*60*1000);
const offset = +210; //Timezone offset for EST in minutes.
const estDate = new Date(dt.getTime() + offset*60*1000);

const year = estDate.getFullYear() // 2019
const month = estDate.toLocaleString('es-ES', { month: 'short' });
const dia = estDate.getDate() // 23


function n(num, len = 2) {
    return `${num}`.padStart(len, '0');
  }



                return (
                  <Link to={`/contenido/${node.slug.current}`} className='pro'>
                    <div className='texto'>
                      <div className='top'>
                        <p className='meta'>{`${n(dia)}.${n(month)}.${n(year)}`}</p>
                        <p className='meta'>{node.categoria ?  node.categoria.title : ''}</p>
                      </div>
                      <h2>{node.title}</h2>
                      <div className='autores'>
                        {node.autor.map(( aut ) => {
                          return (
                            <p className='meta'>{aut.title}</p>

                          )
                        })}
                      </div>
                      
                    </div>
                  </Link>
                )
            })}
          </ArchivoContainr>

          <ul className='categories'>
              {data.allSanityCategoriasPage.nodes.map(( node ) => {
                  return (
                      <li><Link to={`/categorias/${node.slug.current}`}><p>{node.title}</p></Link></li>
                  )
              })}
          </ul>
        </Container>
    </Layout>
  )
}

const Container = styled.div`
    position: relative;
    .hero {
      background-color: var(--gray);
      h1 {
        padding-top: 150px;
        padding-left: 1.33rem;
        padding-bottom: 1.33rem;
        @media (max-width: 680px) {
          padding-top: 80px;
          padding-bottom: 50px;
          font-size: var(--headline-5) !important;
        }
      }
    }
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

const ArchivoContainr = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
  .pro {
    padding: 1.33rem;
    border-bottom: solid 1px var(--black);
    &:nth-child(2n -1) {
      border-right: solid 1px var(--black);
      @media (max-width: 680px) {
        border-right: none;
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
    }
    h2 {
      margin-top: 1.33rem;
      margin-bottom: 1.33rem;
      font-size: var(--headline-5);
    }
  }
`

export default ArchivoPage