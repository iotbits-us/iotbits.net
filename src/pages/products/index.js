import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Products = (props) => {
  console.log(props);
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

          {
            products.map(document => (
              <div key={document.node.id} className="col-12 col-md-4 mb-1">
                <div className="card product product-teaser">
                  <div className="card-content">
                    <h2>
                      <Link to={document.node.id}>{document.node.name}</Link>
                    </h2>
                    <p>{document.node.description}</p>
                  </div>
                </div>
              </div>
            ))
          }

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
          name
          features
          description
        }
      }
    }
  }
`;

export default Products;
