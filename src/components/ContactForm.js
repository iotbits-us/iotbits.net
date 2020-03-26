/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 275,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '25ch',
  },
  message: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const products = [
  {
    name: 'ModbusBox',
  },
  {
    name: 'Other',
  },
];

const topics = [
  {
    name: 'Technical Support',
  },
  {
    name: 'Sales',
  },
  {
    name: 'Other',
  },
];

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactForm = () => {
  const classes = useStyles();

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
      .then(() => {
        setState({
          ...state,
          sent: true,
          name: '',
          email: '',
          message: '',
        });
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Leave us a message
        </Typography>
        <form
          name="Contact Form"
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
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <TextField
            required
            type="text"
            name="name"
            defaultValue={state.name}
            id="name"
            value={state.name}
            label="Name"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            required
            type="email"
            name="email"
            id="email"
            value={state.email}
            label="Email"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="product"
            name="product"
            select
            label="Product"
            value={state.product}
            onChange={handleChange}
            margin="dense"
            variant="outlined"
            style={{ margin: 8 }}
            fullWidth
          >
            {products.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="topic"
            name="topic"
            select
            label="Topic"
            value={state.topic}
            onChange={handleChange}
            margin="dense"
            variant="outlined"
            style={{ margin: 8 }}
            fullWidth
          >
            {topics.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            name="message"
            id="message"
            label="Message"
            value={state.message}
            multiline
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleChange}
          />
          {state.sent ? (
            <Alert className={classes.message} severity="success">
              <AlertTitle>Message submitted</AlertTitle>
              Your message has been submitted. Our customer support team will contact you as soon as
              possible.
            </Alert>
          ) : (
            ''
          )}
          <Button className={classes.button} type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
