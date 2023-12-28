"use client";
import { Box, Container } from "@mui/material";
import CenterTitle from "../Component/CenterTitle";
import CliendSlider from "./CliendSlider";

const Client = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "2rem 0",
        }}>
        <CenterTitle
          title="Our Client"
          text="It is a long established fact that a reader will be of a page when "
          text2="established fact looking at its layout."></CenterTitle>
        <Box>
          <CliendSlider></CliendSlider>
        </Box>
      </Box>
    </Container>
  );
};

export default Client;
