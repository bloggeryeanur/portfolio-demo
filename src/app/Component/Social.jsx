import { Instagram, Twitter, FacebookRounded } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";

const Social = () => {
  return (
    <Box>
      <List
        style={{
          display: "flex",
        }}>
        <ListItem>
          <Link href={"https://www.facebook.com/"}>
            <FacebookRounded color='warning'/>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"https://www.instagram.com/"}>
            <Instagram color='warning'/>
          </Link>
        </ListItem>
        
        <ListItem>
          <Link href={"https://www.linkedin.com/"}>
            <LinkedInIcon color='warning'/>
          </Link>
        </ListItem> 
       
        <ListItem>
          <Link href={"https://twitter.com/home"}>
            <Twitter color='warning'/>
          </Link>
        </ListItem> 
      </List>
    </Box>
  );
};

export default Social;
