import React from 'react';
import Grid from '@material-ui/core/Grid';

import Drink from './Drink/Drink';
import useStyles from './styles';

const Drinks = ({ drinks, onAddToCart }) => {
  const classes = useStyles();

  if (!drinks.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {drinks.map((drink) => (
          <Grid key={drink.id} item xs={12} sm={6} md={4} lg={3}>
            <Drink drink={drink} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Drinks;

