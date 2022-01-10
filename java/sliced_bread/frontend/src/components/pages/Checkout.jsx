import { Box } from "@mui/material";
import React from "react";
import { Form } from "../Form";
import { BackButton } from "../BackButton";

const PaymentFormTemplate = [
  { label: "name", required: false },
  { label: "amount", required: false },
  { label: "city", required: true },
  { label: "province", required: true },
  { label: "country", required: true },
];

export const Checkout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%",
        position: "relative",
      }}
    >
      <BackButton
        styles={{
          position: "absolute",
          top: "24px",
          left: "12px",
        }}
      />
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1615182786737-16b4caf5580a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Form formTitle="Checkout" formTemplate={PaymentFormTemplate} />
    </Box>
  );
};
