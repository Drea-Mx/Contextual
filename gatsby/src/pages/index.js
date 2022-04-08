import React from 'react'
import Layout from "../components/layout/layout";
import Proyectos from '../components/home/Proyectos'
import { graphql } from "gatsby";


export const data = graphql`
  query {
    allSanityArticulosPage(sort: {fields: order, order: ASC}){
        nodes {
        _id
        title
        headline
        imagenDeCover {
            alt
            asset {
            gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
            )
            }
        }
        fecha
        autor {
            title
        }
        categoria {
          title
          icono {
            alt
            asset {
              url
            }
          }
        }
        lecturaDeXMinutos
        cover
        destacado
        slug {
          current
        }
        thumbnailForma
        }
    }

#Categorias
    allSanityCategoriasPage {
    nodes {
      _id
      title
      slug {
        current
      }
      icono {
        alt
        asset {
          url
        }
      }
    }
  }


  }

  
`;

const IndexPage = ({data}) => {
  return(
    <Layout>
      <Proyectos data={data} />
    </Layout>
  )
}

export default IndexPage