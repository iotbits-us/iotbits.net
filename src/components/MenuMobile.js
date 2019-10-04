import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const MenuMobile = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            {
              link.name !== 'Blog' ? <Link to={link.link}>{link.name}</Link>
                : <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
