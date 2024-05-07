import React, { useRef, useState } from "react";
import { Typography, TextField, Button, Checkbox, FormControlLabel, FormGroup, FormControl, InputLabel, Select, MenuItem, ListItemText } from "@mui/material";
import emailjs from "@emailjs/browser";

const Book = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const services = ["Basic Clean and Restring", "The Full Setup", "Fret Work", "Pedalboard Maintenance and Customization"];

  const handleServiceChange = (event) => {
    setSelectedServices(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Check for empty fields
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
  
    if (!name) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      return;
    }
  
    if (!email) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
      return;
    }
  
    if (!message) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, message: "Message is required" }));
      return;
    }
  
    // Include selected services in the message
    const messageWithServices = `${message}\n\nSelected Services:\n${selectedServices.join(", ")}`;
  
    // Clear validation errors
    setValidationErrors({
      name: "",
      email: "",
      message: "",
    });
  
    // Update the message field with selected services
    form.current.message.value = messageWithServices;
  
    emailjs
      .sendForm(
        "service_przmfb9",
        "template_nww4txg",
        form.current,
        "A9aecVw00fDfpAnBP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true);
          // Clear form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div style={{ width: "90%", maxWidth: "400px", color: "white", margin: "0 auto", textAlign: "center", marginBottom: "5%" }}>
      <Typography variant="h4" gutterBottom style={{ fontSize: "1.9rem", marginTop: "2rem", marginBottom: "1rem", color:'#000' }}>
        Book An Appointment
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          label="Name"
          name="from_name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {validationErrors.name && <Typography variant="body2" style={{ color: "red", marginTop: "0.5rem" }}>{validationErrors.name}</Typography>}
        <TextField
          label="Email"
          name="user_email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="service-label">Select Services</InputLabel>
          <Select
            labelId="service-label"
            id="service-select"
            multiple
            value={selectedServices}
            onChange={handleServiceChange}
            label="Select Services"
            variant="outlined"
            renderValue={(selected) => selected.join(", ")}
          >
            {services.map((service, index) => (
              <MenuItem key={index} value={service}>
                <Checkbox checked={selectedServices.indexOf(service) > -1} />
                <ListItemText primary={service} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {validationErrors.email && <Typography variant="body2" style={{ color: "red", marginTop: "0.5rem" }}>{validationErrors.email}</Typography>}
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {validationErrors.message && <Typography variant="body2" style={{ color: "red", marginTop: "0.5rem" }}>{validationErrors.message}</Typography>}
        
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "2rem", backgroundColor: "#000", color: "#fff" }}
        >
          Send
        </Button>
      </form>
      {isSuccess && <Typography variant="body1" style={{ color: "green", marginTop: "1rem" }}>Message sent successfully! <br></br>Please allow 1-2 business days for a reply.</Typography>}
    </div>
  );
};

export default Book;
