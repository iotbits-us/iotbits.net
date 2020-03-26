import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <h3 className="footer-title">{props.data.site.siteMetadata.title}</h3>
            <ul className="footer-menu">
              <li>
                {' '}
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                {' '}
                <Link to="/products">Products</Link>
              </li>
              <li>
                {' '}
                <a href="https://blog.iotbits.net" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
              <li>
                {' '}
                <Link to="/contact">Contact</Link>
              </li>
              <li className="copyright">
                ©
{' '}
{new Date().getFullYear()}
{' '}
{props.data.site.siteMetadata.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
