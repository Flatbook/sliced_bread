import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const BackButton = ({ styles = {} }) => {
  return (
    <Box sx={{ textDecoration: "none", ...styles }}>
      <Link id="back-button" to="/" style={{ color: "black" }}>
        <ArrowBackIosNewIcon fontSize="large" />
      </Link>
    </Box>
  );
};
