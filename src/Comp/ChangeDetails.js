import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Link,
  Box, // Import Box component for Flexbox layout
} from "@mui/material";

const ChangeDetail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center the form horizontally
        justifyContent="center" // Center the form vertically
        minHeight="100vh" // Set the minimum height of the box to fill the viewport
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Full Name"
            fullWidth
            
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Age"
            type="number"
            fullWidth
            
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Address"
            fullWidth
            
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            
            style={{ marginTop: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px", width: "300px" }}
          >
            Set Details
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangeDetail;
