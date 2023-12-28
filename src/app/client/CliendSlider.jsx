import React, { Component } from "react";
import Slider from "react-slick";
import One from "../../image/client/testi-1.jpg";
import Two from "../../image/client/testi-2.jpg";
import Three from "../../image/client/testi-3.jpg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

class CliendSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Box
        sx={{
          margin: "0 auto",
          padding: { xs: "0", sm: "0 1rem" }, // Adjust padding based on screen size
        }}>
        <Slider {...settings}>
          <Box
            sx={{
              textAlign: "center",
              padding: "1rem", // Add padding for spacing
            }}>
            <Image
              style={{ margin: "0 auto", borderRadius: "50%" }}
              src={One}
              alt="One client"
              width={300} // Set a fixed width for better responsiveness
              height={300} // Set a fixed height for better responsiveness
            />
            <Typography sx={{ margin: "1rem 0" }}>
              It is a long established fact that a reader will be of a page when{" "}
              <br />
              established fact looking at its layout.
            </Typography>
            <Typography variant="h5" sx={{ color: "white" }}>
              Our First Client
            </Typography>
          </Box>
          {/* Repeat similar adjustments for other slides */}
        </Slider>
      </Box>
    );
  }
}

export default CliendSlider;
