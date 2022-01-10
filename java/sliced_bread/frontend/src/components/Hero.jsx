import { Box } from "@mui/material";
import React from "react";
import { TitleCard } from "./TitleCard";

export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "120vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1610622930110-3c076902312a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`,
          backgroundSize: "cover",
          backgroundPositionY: "-140px",
        }}
      >
        <TitleCard />
      </Box>
    </Box>
  );
};
