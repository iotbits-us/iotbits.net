import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';
import ProductCard from '../components/ProductCard';

const Home = (props) => {
  const products = props.data.allStrapiProduct.edges;
  const companyFeatures = props.data.allStrapiCompanyFeature.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Providing tailored IoT solutions for industries and makers"
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>IOTBITS</h1>
          <p>
            Providing tailored IoT solutions for industries and makers
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div style={{ 'margin-top': '100px' }} className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Products</h2>
          </div>
          {products.map(edge => (
            <div key={edge.node.strapiId} className="col-12 col-md-4 mb-1">
               <ProductCard product={edge.node}/>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/products">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">What We Do</h2>
          </div>
          {companyFeatures.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img alt="" src={withPrefix(edge.node.image.publicURL)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`  
  query ProductAndCompanyFeature {
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
          status
        }
      }
    }
    allStrapiCompanyFeature {
      edges {
        node {
          id
          title
          description,
          image {
            publicURL
          }
        }
      }
    }
  }
`;

export default Home;
