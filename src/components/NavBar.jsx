import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(2px)",
  padding: "0px",
  backgroundColor: "transparent", // Adjust opacity as needed
  boxShadow: "none",
  color: "#fff",
  transition: "transform 0.3s ease", // Add transition for smooth animation
  position: "fixed",
  width: "100%",
  zIndex: 1000,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#f0f0f0",
    width: "240px",
  },
}));

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
    setPrevScrollPos(currentScrollPos);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <StyledAppBar
        position="fixed"
        elevation={0}
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <Toolbar>
          <h2 className="nav-logo">OK GUITAR TECH</h2>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon
              sx={{ color: "#fff", fontSize: "2.5rem", margin: "10px" }}
            />
          </IconButton>
          <StyledDrawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
          >
            <List>
              <ListItem
                button
                onClick={handleDrawerClose}
                component={Link}
                to="/"
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerClose}
                component={Link}
                to="/services"
              >
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerClose}
                component={Link}
                to="/about"
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                button
                onClick={handleDrawerClose}
                component={Link}
                to="/contact"
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </StyledDrawer>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                display: { xs: "none", md: "initial" },
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/services"
              sx={{
                display: { xs: "none", md: "initial" },
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                display: { xs: "none", md: "initial" },
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                display: { xs: "none", md: "initial" },
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
