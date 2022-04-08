import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import React from 'react';


export default function SinglePostPage({ data: { articulo } }) {


    
    return (
        <Layout>
            <h1>{articulo.title}</h1>
            
        </Layout>
    )
}



export const query = graphql`
    query($slug: String!){
        articulo: sanityArticulosPage(slug: {
		current: {eq: $slug} }){
            title
        }
    }
`