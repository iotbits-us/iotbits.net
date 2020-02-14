import React from 'react';
import { graphql, withPrefix } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Product = (props) => {
  // eslint-disable-next-line no-console
  console.log(props);
  const product = props.data.allStrapiProduct.edges[0].node;
  return (
    <Layout bodyClass="page-product">
      <SEO title={product.name} />
      <div className="container pt-4 pt-md-10">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8">
              <div className="product product-single">
                <h1 className="title">{product.name}</h1>
                <img alt="" src={withPrefix(product.image.publicURL)} />
                <div className="content">
                <ReactMarkdown source={product.content} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProductQuery($id: String!) {
    allStrapiProduct(filter: { strapiId: { eq: $id } }) {
      edges {
        node {
          name
          strapiId
          content
          description
          image {
            publicURL
          }
        }
      }
    }
  }
`;

export default Product;
