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
            icono {
                alt
                asset {
                    url
                }
            }
        }
        proyectos: allSanityArticulosPage(filter: {categoria: {slug: {current: {eq: $slug}}}}) {
            nodes {
            _id
            title
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
            icono {
                alt
                asset {
                url
                }
            }
            }
        }
    }
`