/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { navigate } from 'gatsby-link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // eslint-disable-next-line no-undef
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };
  return (
    <div>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
{' '}
<input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <TextField type="text" name="name" id="name" label="Your name" onChange={handleChange} />
        </p>
        <p>
          <TextField type="email" name="email" id="email" label="Email" onChange={handleChange} />
        </p>
        <p>
          <TextField
            name="message"
            id="message"
            label="Your message"
            multiline
            onChange={handleChange}
          />
        </p>
        <p>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
