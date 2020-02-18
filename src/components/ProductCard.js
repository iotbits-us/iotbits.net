import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({ product }) {
  const classes = useStyles();
  let statusColor;
  if (product.status === 'development') {
    statusColor = 'secondary';
  } else if (product.status === 'evaluation') {
    statusColor = '';
  } else if (product.status === 'available') {
    statusColor = 'primary';
  } else {
    statusColor = 'secondary';
  }
  return product.external ? (
    <Card className={classes.root}>
      <a style={{ textDecoration: 'none' }} href={`${product.link}`}>
        <CardActionArea>
          <Chip
            style={{ float: 'right', margin: '3px', textTransform: 'capitalize' }}
            size="small"
            label={product.status}
            color={statusColor}
          />
          <CardMedia
            className={classes.media}
            image={product.image.publicURL}
            title={product.name}
          />
          <CardContent style={{ 'min-height': 250 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions>
        <Button size="small" color="primary" href={`${product.link}`}>
          More Info
        </Button>
        {product.status === 'evaluation' || product.status === 'available' ? (
          <Button size="small" color="primary" href="/contact">
            ORDER
          </Button>
        ) : null}
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.root}>
      <Link style={{ textDecoration: 'none' }} to={`/product/${product.strapiId}`}>
        <CardActionArea>
          <Chip
            style={{ float: 'right', margin: '3px', textTransform: 'capitalize' }}
            size="small"
            label={product.status}
            color={statusColor}
          />
          <CardMedia
            className={classes.media}
            image={product.image.publicURL}
            title={product.name}
          />
          <CardContent style={{ 'min-height': 250 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" href={`/product/${product.strapiId}`}>
          More Info
        </Button>
        {product.status === 'evaluation' || product.status === 'available' ? (
          <Button size="small" color="primary" href="/contact">
            ORDER
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
