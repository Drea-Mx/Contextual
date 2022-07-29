import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Categorias from '../components/categoria/Categorias';


export default function SingleCategoriaPage({ data}) {



    
    return (
        <Layout>
            <Categorias data={data} />
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!){
        categoria: sanityCategoriasPage(slug: { current: {eq: $slug} }){
            title
        }
        proyectos: allSanityArticulosPage(filter: {categoria: {slug: {current: {eq: $slug}}}}) {
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
                }
                lecturaDeXMinutos
                cover
                destacado
                slug {
                    current
                }
                thumbnailForma
                tags {
                    title
                }
            }
        }
        tagsSection:allSanityCategoriasPage {
            nodes {
            _id
            title
            slug {
                current
            }
            }
        }
    }
`