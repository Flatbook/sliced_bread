import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Paper>
        <Box
          sx={{
            py: "36px",
            display: "flex",
            justifyItems: "baseline",
            flexFlow: "column nowrap",
          }}
        >
          <Typography variant="h3">About Us</Typography>

          <Typography
            sx={{ width: "50%", alignSelf: "center" }}
            variant="body1"
          >
            Congratulations for finding the greatest beverage ever made. We have
            spent decades developing this formula and have worked very hard to
            get this into everyone's hands. Drink yours today!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
