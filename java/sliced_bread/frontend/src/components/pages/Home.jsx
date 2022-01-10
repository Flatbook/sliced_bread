import { Container } from "@mui/material";
import React from "react";
import { About } from "../About";
import { Hero } from "../Hero";

export const Home = () => {
  return (
    <>
      <Container disableGutters className="App">
        <Hero />
        <About />
      </Container>
    </>
  );
};
