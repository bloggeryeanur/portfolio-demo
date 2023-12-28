import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link } from "react-scroll";
import AboutPage from "../about/page";
import Client from "../client/page";
import Services from "../services/page";
import Blog from "../blog/page";
import Contact from "../contact/page";
import BasicTabs from "../portfolio/page";
import HeroSection from "./HeroSection";
// import Component

const drawerWidth = 240;

const navItems = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "about",
    name: "About",
  },
  {
    path: "services",
    name: "Services",
  },
  {
    path: "client",
    name: "Client",
  },
  {
    path: "portfolio",
    name: "Portfolio",
  },
  {
    path: "blog",
    name: "Blog",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: " #b4b4b4" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Yeanur
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ path, name }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                
                <ListItemText primary={name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

 
  


  const container =
    window !== undefined ? () => window().document.body : undefined;

   

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#b4b4b4" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Yeanur 2
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ path, name }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <Button sx={{ color: "#fff" }}>{name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            background: "#b4b4b4",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>

      {/* Other section */}
      <Box
        sx={{
          margin: "0 auto",
          marginTop: "4rem",
        }}>
        {/* Impoet component all compoent here hok */}

        <Box id="home">
            <HeroSection />
          </Box>
        <Box id="about">
          <AboutPage></AboutPage>
        </Box>
        <Box id="services">
          <Services />
        </Box>

        <Box id="client">
            <Client />
          </Box>

        <Box id="portfolio">
          <BasicTabs />
        </Box>

        <Box id="blog">
          <Blog />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
