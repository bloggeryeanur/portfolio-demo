"use client"
import { Box, Container, Grid } from "@mui/material";
import CenterTitle from "../Component/CenterTitle";
import ServicesCard from "./ServicesCard";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AdbIcon from "@mui/icons-material/Adb";
import MovieIcon from "@mui/icons-material/Movie";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { yellow } from "@mui/material/colors";

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          
          padding: "2rem 0",
        }}>
        {/* Title section */}
        <CenterTitle
          title="Our Services"
          text="it is a long established fact that a reader will be of a page when "
          text2="established fact looking at its layout."></CenterTitle>

        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            {/* Import servicesCard */}
            <ServicesCard
              cIcon={<WebAssetIcon sx={{ color: yellow[500] }} />}
              cartTitle="Graphic Design"
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<BorderColorIcon sx={{ color: yellow[500] }} />}
              cartTitle="Unlimited Color              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<AdbIcon sx={{ color: yellow[500] }} />}
              cartTitle="Media Marketing"
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<MovieIcon sx={{ color: yellow[500] }} />}
              cartTitle=" Unlimited Wifi
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<SaveAltIcon sx={{ color: yellow[500] }} />}
              cartTitle=" Responsive Design
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} ls={4}>
            <ServicesCard
              cIcon={<WebAssetIcon sx={{ color: yellow[500] }} />}
              cartTitle=" Easy to customize
              "
              cartText="There are many variations of passages of but the majority have suffered alteration in some form."
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
