"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CenterTitle from "../Component/CenterTitle";
import {
  EmailOutlined,
  LocationCityOutlined,
  PhonelinkLockRounded,
} from "@mui/icons-material";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <Container>
      
      <div maxWidth="lg">
        <Box sx={{ margin: "2rem 0" }}>
          <CenterTitle
            title="Contact Us"
            text="It is a long established fact that a reader will be of a page when"
            text2="established fact looking at its layout."
          />

          <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <ContactCard
                icon={<PhonelinkLockRounded color="warning" />}
                title="Call Us On"
                contact="+880 1620 349363"
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <ContactCard
                icon={<EmailOutlined color="warning" />}
                title="Email Us At"
                contact="bloggeryeanur@gmail.com"
              />
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <ContactCard
                icon={<LocationCityOutlined color="warning" />}
                title="Visit Office"
                contact="1206, Dhaka, Bangladesh"
              />
            </Grid>
          </Grid>

          {/* Contact form */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: "2rem",
              }}>
              <TextField fullWidth label="Your name..." id="fullWidth" />
              <TextField
                fullWidth
                label="Your email..."
                id="fullWidth"
                sx={{ margin: "1rem 0" }}
              />
              <TextField fullWidth label="Your Subject..." id="fullWidth" />
              <TextField
                fullWidth
                multiline
                rows={8}
                label="Your Message..."
                id="fullWidth"
                sx={{
                  margin: "1rem 0",
                }}
              />

              <Box sx={{ textAlign: "end" }}>
                <Button variant="contained" color="warning">
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Contact;
