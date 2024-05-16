import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const TierOne = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  return (
    <>
    <div style={{width:'100vw', margin:'0px', }}>
    <Paper elevation={0} className="tier-one-info">
      <Typography variant="h4" gutterBottom fontWeight={100}>
        Basic Clean and Restring
      </Typography>
      <Typography variant="body1" paragraph fontWeight={100}>
        The Basic Clean and Restring is ideal for those looking to give their guitar a quick refresh or bring it back to life. OK Guitar Tech will ensure that your instrument receives the care it deserves.
      </Typography>
      <Typography variant="h5" gutterBottom fontWeight={100}>
        What's Included:
      </Typography>
      <List>
        {[
          "Thorough cleaning of the guitar body, neck, and headstock",
          "Restring with quailty strings",
          "Basic inspection of the instrument's condition",
        ].map((service, index) => (
          <ListItem key={index}>
            <ListItemText primary={service} style={{fontWeight: 100}}/>
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
    </div>
    </>
  );
};

export default TierOne;
