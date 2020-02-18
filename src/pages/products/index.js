import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import ProductCard from '../../components/ProductCard';

const Products = (props) => {
  const products = props.data.allStrapiProduct.edges;
  return (
    <Layout bodyClass="page-products">
      <SEO title="Products" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Our Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {products.map(edge => (
            <div key={edge.node.strapiId} className="col-12 col-md-4 mb-1">
              <ProductCard product={edge.node} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Product {
    allStrapiProduct {
      edges {
        node {
          id
          strapiId
          name
          description
          content
          image {
            publicURL
          }
          status,
          external,
          link
        }
      }
    }
  }
`;

export default Products;
