import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Pedalboard = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  return (
    <Paper elevation={0} className="tier-one-info" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom fontWeight={100}>
        Pedalboard Maintenance and Customization
      </Typography>
      <Typography variant="body1" paragraph fontWeight={100}>
        Scratchy pedals, pots, or just want a re-route? OK Guitar Tech offers professional and custom solutions to ensure your pedalboard delivers the best tone, reliability, and effciency.
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={100}>
        What's Included:
      </Typography>
      <List>
        {[
          "Thorough cleaning of pedals, patch cables, and pedalboard",
          "Custom wiring solutions for optimized signal flow",
          "Pedal placement optimization for ergonomic usage",
          "Power supply inspection and cable management",
          "Velcro and other mounting solutions",
        ].map((service, index) => (
          <ListItem key={index}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" paragraph fontWeight={100}>
        Trust OK Guitar Tech to tailor your pedalboard setup according to your preferences and playing style. Whether you're a gigging musician or a studio enthusiast, we ensure your effects pedals are in top condition for seamless performances.
      </Typography>
      <Button onClick={handleGoBack} style={{ marginBottom: "10px" }}>
        Back
      </Button>
    </Paper>
  );
};

export default Pedalboard;
