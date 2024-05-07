import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Fretwork = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  return (
    <Paper elevation={0} className="tier-one-info" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom fontWeight={100}>
        Fretwork and Neck Adjustment
      </Typography>
      <Typography variant="body1" paragraph fontWeight={100}>
        Our Fretwork and Neck Adjustment service is tailored for those seeking precision and playability enhancements for their guitar's fretboard and neck. OK Guitar Tech meticulously inspects, levels, crowns, and polishes frets to ensure optimal performance.
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={100}>
        What's Included:
      </Typography>
      <List>
        {[
          "Complete fretboard inspection and assessment",
          "Fret leveling, crowning, and polishing for smooth playability",
          "Neck adjustment for optimal action and playability",
          "Truss rod adjustment for ideal neck relief",
          "Fretboard cleaning and conditioning for enhanced durability",
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

export default Fretwork;
