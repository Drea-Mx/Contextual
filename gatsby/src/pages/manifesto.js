import React from 'react'
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import Seo from "../components/layout/seo"
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

export const data = graphql`
  query {
      sanityManifestoPage {
      _rawTitleFormat
      _rawTextoPrincipal
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;

const ManifestoPage = ({data}) => {
  return(
    <Layout>
        <Seo title={data.sanityManifestoPage.seo.title} description={data.sanityManifestoPage.seo.description} image={data.sanityManifestoPage.seo.image.asset.url} />
        <Container>
          <h1 className='title headline-1'>
            <BlockContent
                blocks={data.sanityManifestoPage._rawTitleFormat}
            />
          </h1>
          <div className='bodyDesc'>
            <BlockContent
                blocks={data.sanityManifestoPage._rawTextoPrincipal}
            />
          </div>
        </Container>
    </Layout>
  )
}

const Container = styled.div`
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 50px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: var(--gray);
    @media (max-width: 680px) {
      display: block;
      padding: 80px 20px;
    }
    .title {
      grid-column: 1/ 5;
      @media (max-width: 1200px) {
        grid-column: 1/ 4;
        font-size: 3.8vw;
      }
      @media (max-width: 680px) {
        text-align: center;
        font-size: 3.815rem;
        margin-bottom: 50px;
      }
    }
    .bodyDesc {
      grid-column: 5/9;
      @media (max-width: 1200px) {
        grid-column: 4/ 10;
      }

    }
`
export default ManifestoPage