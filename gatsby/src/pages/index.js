import React, {useState} from 'react'
import Layout from "../components/layout/layout";
import Proyectos from '../components/home/Proyectos'
import { graphql } from "gatsby";
import Seo from "../components/layout/seo"

export const data = graphql`
  query {
    allSanityArticulosPage(sort: {fields: fecha, order: DESC}
        filter: {archivo: {ne: true}}
      ) {
        nodes {
        _id
        title
        headline
        showHideHeadline
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
          _id
          title
        }
        categoria {
          title
        }
        lecturaDeXMinutos
        cover
        destacado
        slug {
          current
        }
        thumbnailForma
        moduleArray {
          ... on SanityParrafoColumna {
            campoDeTexto {
              children {
                text
              }
            }
          }
        }
        seo {
          description
        }
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

const IndexPage = ({data}) => {
  const [query, setQuery] = useState('');

  return(
    <Layout  query={query} setQuery={setQuery}>
        <Seo title={data.sanitySettingsPage.title} description={data.sanitySettingsPage.descriptionSite} image={data.sanitySettingsPage.siteImage.asset.url} />
      <Proyectos query={query} setQuery={setQuery} data={data} />
    </Layout>
  )
}

export default IndexPage