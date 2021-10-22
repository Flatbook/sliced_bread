import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken, test }) => {
  const methods = useForm();


  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="country" label="Country" />
            <FormInput required name="city" label="City" />
            <FormInput required name="stae" label="State / Province" />       
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
