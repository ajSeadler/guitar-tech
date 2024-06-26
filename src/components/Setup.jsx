import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  
  return (
    <Paper elevation={0} className="tier-one-info" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom fontWeight={100}>
        Full Guitar Setup
      </Typography>
      <Typography variant="body1" paragraph fontWeight={100}>
        Our Full Guitar Setup service is designed for those seeking a comprehensive overhaul to optimize their instrument's performance. OK Guitar Tech will ensure every aspect of your guitar is meticulously inspected, adjusted, and perfected.
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={100}>
        What's Included:
      </Typography>
      <List>
        {[
          "Restring",
          "Thorough cleaning of the guitar body, neck, and headstock.",
          "Intonation adjustment for precise tuning across the fretboard",
          "Electronics check and cleanup",
          "Adjust guitar action",
          "Truss rod adjustment for ideal neck relief",
        ].map((service, index) => (
          <ListItem key={index}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" paragraph fontWeight={100}>
      OK Guitar Tech takes personalized care of your instrument to ensure it stays in prime condition. Regardless of your skill level, we're here to cater to your guitar's needs, ensuring it continues to sound and play its best.
      </Typography>
      <Button onClick={handleGoBack} style={{ marginBottom: "10px" }}>
        Back
      </Button>
    </Paper>
  );
};

export default Setup;
