/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import axios from 'axios';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={(values, actions) => {
      axios('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.parse({ 'form-name': 'Contact Form', ...values }),
      })
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('Success');
          actions.resetForm();
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('Error');
        })
        .finally(() => actions.setSubmitting(false));
    }}
    validate={(values) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if (!values.name) {
        errors.name = 'Name Required';
      }
      if (!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required';
      }
      if (!values.message) {
        errors.message = 'Message Required';
      }
      return errors;
    }}
  >
    {() => (
      <Form>
        <label htmlFor="name">Name: </label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email: </label>
        <Field name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="message">Message: </label>
        <Field name="message" component="textarea" />
        <ErrorMessage name="message" />

        <button type="submit">Send</button>
      </Form>
    )}
  </Formik>
);
