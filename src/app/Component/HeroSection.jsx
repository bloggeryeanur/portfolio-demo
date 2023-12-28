import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Background from "../../image/bg2.jpg";
import { useEffect } from "react";
import Typed from "typed.js";
import Social from "./Social";

const HeroSection = () => {
  useEffect(() => {
    // Target the element by class name
    const targetElement = document.querySelector(".auto-input");

    // Check if the element exists before initializing Typed.js
    if (targetElement) {
      const typed = new Typed(targetElement, {
        strings: ["Yeanur", "Frontend", "Backend", "FullStack"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      });

      // Clean up Typed.js instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <Box
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        sx={{
          color: "#b4b4b4",
          height: "auto", // Set height to 'auto' to allow content to expand
          textAlign: "center",
          marginTop: "-9rem",
        }}>
        <Typography variant="h3">Welcome</Typography>
        <Typography className="auto-input" variant="h1"></Typography>

        <Typography variant="h5" sx={{ margin: "1rem 0" }}>
          It is a long established fact that a reader will be of a page when{" "}
          <br />
          established fact looking at its layout.
        </Typography>
        <Button variant="outlined" size="large" color="info">
          Download CV
        </Button>
        <Typography sx={{mt:4}}>
          
          <Social></Social>
        </Typography>
        </Box>
    </Box>
  );
};

export default HeroSection;
