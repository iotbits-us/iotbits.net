import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import ContactForm from '../../components/ContactForm';

const Contact = () => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Leave a message</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
