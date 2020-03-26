import React from 'react';
import Container from '@material-ui/core/Container';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import ContactForm from '../../components/ContactForm';

const Contact = () => (
    <Layout bodyClass="page-contact">
      <SEO title="Contact" />
      <div className="intro intro-small">
        <Container fixed>
          <div className="row p-2">
            <div className="col-12">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-12">
              <Call button={false} />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-12">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
);

export default Contact;
