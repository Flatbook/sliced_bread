import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackButton } from "../BackButton";
import { useParams } from "react-router-dom";

export const Order = () => {
  const [order, setOrder] = useState({
    id: null,
    name: null,
    country: null,
    amount: null,
    city: null,
  });
  const { id } = useParams();
  const { name, country, amount, city } = order;

  useEffect(() => {
    // get id from param to fetch
    const fetchOrder = async () => {
      let response = await fetch(`/order/${id}`);
      response = await response.json();
      setOrder((prevState) => ({ ...prevState, ...response }));
    };
    fetchOrder();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1613637069737-2cce919a4ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BackButton
        styles={{ position: "absolute", top: "28px", left: "40px" }}
      />
      {order.id ? (
        <Paper
          elevation={0}
          variant="outlined"
          sx={{ textAlign: "center", py: "24px" }}
        >
          <Typography variant="h2">Thank you for your order</Typography>
          <Typography variant="h6">
            We are working on getting your Life Smoothie to you
          </Typography>
          <Typography sx={{ mt: "24px" }} variant="h5">
            Save this link for future access to your order information:
          </Typography>
          <Typography variant="body1">{window.location.href}</Typography>
          <Box mt="24px">
            <Typography variant="h6">Your Order number is:</Typography>
            <Typography variant="body1">{order.id}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">User Information</Typography>
            <Typography variant="subtitle1">Name: {name}</Typography>
            <Typography variant="subtitle1">Country: {country}</Typography>
            <Typography variant="subtitle1">Amount: {amount}</Typography>
            <Typography variant="subtitle1">City: {city}</Typography>
          </Box>
        </Paper>
      ) : (
        <Paper
          elevation={0}
          variant="outlined"
          sx={{ textAlign: "center", py: "24px" }}
        >
          <Typography variant="h2">Sorry!</Typography>
          <Typography variant="h6">
            There is no order associated with that order number
          </Typography>
        </Paper>
      )}
    </Box>
  );
};
