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
    padding-top: 8.88rem;
    padding-left: 2.66rem;
    padding-right: 2.66rem;
    padding-bottom: 8.88rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: var(--gray);
    @media (max-width: 680px) {
      display: block;
      padding: 4.5rem 1.33rem;
    }
    .title {
      grid-column: 1/ 5;
      @media (max-width: 1200px) {
        grid-column: 1/ 4;
        font-size: var(--headline-1);
        line-height: var(--lineheight);
      }
      @media (max-width: 680px) {
        text-align: center;
        font-size: var(--headline-1);
        margin-bottom: 50px;
      }
    }
    h1 p {
      line-height: var(--lineheight);
    }
    .bodyDesc {
      grid-column: 5/9;
      @media (max-width: 1200px) {
        grid-column: 4/ 10;
      }

    }
`
export default ManifestoPage