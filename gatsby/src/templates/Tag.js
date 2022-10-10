import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Tags from '../components/tag/Tags';


export default function SingleTagPage({ data}) {



    
    return (
        <Layout>
            <Tags data={data} />
        </Layout>
    )
}


export const query = graphql`
    query($slug: String!){
        tag: sanityTagsPage(slug: { current: {eq: $slug} }){
            title
            slug {
                current
            }
        }
        proyectos: allSanityArticulosPage(filter: {tags: {elemMatch: {slug: {current: {eq: $slug}}}}}) {
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
        categorias: #Categorias
            allSanityCategoriasPage(sort: {fields: order, order: ASC}) {
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