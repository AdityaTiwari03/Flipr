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

const SignupPage = () => {
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
          <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
            Sign Up
          </Typography>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Full Name"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Age"
            type="number"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          />
          <FormControl
            component="fieldset"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Address"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            style={{ marginTop: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px", width: "300px" }}
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" align="center">
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignupPage;
