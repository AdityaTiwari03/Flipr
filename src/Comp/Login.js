import React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Box, // Import Box component for Flexbox layout
} from "@mui/material";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
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
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
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
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "20px" }}
        >
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
