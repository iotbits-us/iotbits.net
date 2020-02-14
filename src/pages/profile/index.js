import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layouts/index';

const Profile = (props) => {
  // eslint-disable-next-line no-console
  console.log(props);
  const users = props.data.allStrapiUser.edges;
  return (
    <Layout bodyClass="page-profile">
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {users.map(user => (
          <div>{user.node.username}</div>
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allStrapiUser {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`;

export default Profile;
