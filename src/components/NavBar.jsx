import React, { useState } from "react";
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
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust opacity as needed
  boxShadow: "none",
  color: "#000",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#f0f0f0",
    width: "240px",
  },
}));

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar>
          <div className="nav-logo">
            <span style={{ color: "#000", fontWeight: "bold" }}>OK</span>
            <span style={{ color: "#000", fontWeight: 200 }}>Guitar Tech</span>
          </div>
          {/* <img src="/guitarShopLogo.png" alt="Logo" style={{ width: 40, height: 40 }} /> */}
          <div style={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
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
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ display: { xs: "none", md: "initial" }, fontWeight: 100 }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/services"
              sx={{ display: { xs: "none", md: "initial" }, fontWeight: 100 }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ display: { xs: "none", md: "initial" }, fontWeight: 100 }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{ display: { xs: "none", md: "initial" }, fontWeight: 100 }}
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
