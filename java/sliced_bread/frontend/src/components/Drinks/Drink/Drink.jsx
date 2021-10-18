import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart }  from '@material-ui/icons';

import useStyles from './styles';

const Drink = ({ drink , onAddToCart}) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(drink.id, 1);

  console.log(drink);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={drink.image.url} title={drink.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {drink.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${drink.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: drink.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Drink
