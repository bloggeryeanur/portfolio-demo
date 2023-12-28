import { Box, Grid, Typography } from "@mui/material";


const ContactCard = ({icon,title,contact}) => {
    return (
        <Box sx={{ textAlign: "center", margin: '1rem' }}>
            <Typography>{icon}</Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography>{contact}</Typography>
          </Box>
    );
};

export default ContactCard;