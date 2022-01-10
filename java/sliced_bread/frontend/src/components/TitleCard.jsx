import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const TitleCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap",
          maxWidth: "100%",
          pt: "15%",
          pb: "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Life Smoothie</Typography>
          <Typography variant="h6">
            Introducing the greatest beverage of all time.
          </Typography>
          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
              textAlign: "center",
              paddingTop: "24px",
            }}
          >
            <Button id="to-checkout" variant="contained">
              Get yours today
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
