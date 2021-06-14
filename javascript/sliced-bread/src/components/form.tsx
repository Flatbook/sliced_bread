import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(8),
    maxWidth: '80%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

interface IFormInput {
  name: string;
  quantity: number;
  city: string;
  state: string;
  country: string;
  iceCreamType: {label: string; value: string };
}

export default function Form() {
  const classes = useStyles();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField fullWidth margin="normal" variant="outlined" label="Your name" autoFocus {...field} />}
      />

      <Controller
        name="quantity"
        control={control}
        defaultValue={0}
        render={({ field }) => <TextField fullWidth margin="normal" variant="outlined" label="quantity" type="number" {...field} />}
      />

      <Controller
        name="city"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <TextField required fullWidth margin="normal" variant="outlined" label="city" autoFocus {...field} />}
      />
      {errors.city?.type === 'required' && "Please tell me where you live"}


      <Controller
        name="state"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <TextField required fullWidth margin="normal" variant="outlined" label="state" autoFocus {...field} />}
      />
      {errors.state?.type === 'required' && "Please tell me where you live"}


      <Controller
        name="country"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <TextField required fullWidth margin="normal" variant="outlined" label="country" autoFocus  {...field} />}
      />
      {errors.country?.type === 'required' && "Please tell me where you live"}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        YES! Give me the best beverage ever!
      </Button>
    </form>
  );
};