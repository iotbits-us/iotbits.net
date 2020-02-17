import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
           {
              link.name !== 'Blog' ? <Link to={link.link}>{link.name}</Link>
                : <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name.toUpperCase()}</a>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
