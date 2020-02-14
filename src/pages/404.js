import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout bodyClass="page-404">
        <div className="container">
          <h1>Not Found</h1>
          <p>You just hit a page that doesn&#39;t exist...</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
