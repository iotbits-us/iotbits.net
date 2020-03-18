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
          <p>Providing tailored IoT solutions for industries and makers</p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div style={{ 'margin-top': '40px' }} className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">About Us</h2>
          </div>
          <div className="col-12">
          <p>
            At IOTBITS we are focused into development of tailored IoT hardware and software
            solutions that facilitate collecting data from industrial devices into cloud IoT
            platforms. Our industrial technology expertise, continued delivery excellence and a
            passionate team, helps us to develop IoT connected products and solutions that would
            speed up integration of industrial controllers into the IoT world, such as Variable
            Frequency Drives, Modbus RTU sensors and PLC's. We design and develop our products,
            hardware, firmware and applications in the US.
          </p>
          <p>
            We are pleased to assist our clients with full technical support of our devices, as well
            as preparation, implementation and deployment of cloud services, in addition to
            providing free consulting services to assist clients reimagine their online sensor
            presence.
          </p>
          <p>
            Our experienced IoT consultants and developers will help to define what technology is
            best suited for customers applications, with solid expertise developing IoT solutions,
            based on Wi-Fi, LoRa, LoRaWAN, and Narrowband IoT.
          </p>
          </div>
        </div>
      </div>

      <div style={{ 'margin-top': '20px' }} className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Products</h2>
          </div>
          {products.map(edge => (
            <div key={edge.node.strapiId} className="col-12 col-md-4 mb-1">
              <ProductCard product={edge.node} />
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
          external
          link
        }
      }
    }
    allStrapiCompanyFeature {
      edges {
        node {
          id
          title
          description
          image {
            publicURL
          }
        }
      }
    }
  }
`;

export default Home;
