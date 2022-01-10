import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/API";

export const Form = ({ formTitle = "", formTemplate = [] }) => {
  const [values, setValues] = useState(formTemplate);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const MAX_ORDER_SIZE = 2147483647;
  const API_URL = "/order";

  const handleSubmit = (e) => {
    e.preventDefault();
    //Send to backend and generate order ID
    API.postData(API_URL, JSON.stringify(values)).then(
      (data) => isValid && navigate(`/order/${data.uuid}`)
    );
  };

  // Validation
  const validateForm = (label, input) => {
    if (label === "amount") {
      isNaN(input) || input > MAX_ORDER_SIZE || input < 1
        ? setIsValid(false)
        : setIsValid(true);
    }
    // Add more form validation here if needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateForm(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Box sx={{ display: "flex", justifySelf: "center", alignSelf: "center" }}>
      <Box px="24px">
        {formTitle !== "" && (
          <Typography sx={{ pb: "24px" }} variant="h2">
            {formTitle}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          {formTemplate.map((field, i) => {
            return (
              <Box py="12px" key={`${i + "-" + field.label}`}>
                <TextField
                  id={`textfield-${field.label}`}
                  label={field.label}
                  name={field.label}
                  variant="outlined"
                  onChange={handleInputChange}
                  error={!isValid}
                  required={field.required}
                  InputLabelProps={{ required: false }}
                />
              </Box>
            );
          })}
          <Box sx={{ pt: "12px" }}>
            <Button type="submit" variant="contained">
              Buy Now
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
