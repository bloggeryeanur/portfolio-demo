import { Box, Button, Typography } from "@mui/material";
import CenterTitle from "./CenterTitle";

const Hire = () => {
  return (
    <Box sx={{ textAlign: "center", margin: "4rem 0" }}>
      <Typography variant="h4">I Am Available For Freelancer.</Typography>
      <Button variant="contained" color="warning" sx={{ mt: 2 }}>
        HIRE ME!
      </Button>
    </Box>
  );
};

export default Hire;
