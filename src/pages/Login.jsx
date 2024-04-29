import React from "react";
import { Button, TextField, FormControl } from "@mui/material";
import useAuthStore from "../store";
import axios from "axios";

const Login = () => {
  const { setIsAuthenticated } = useAuthStore(); // Assuming same method to set authentication

  const handleSubmit = async (values) => {
    // Implement your login logic here (e.g., API call)
    console.log("Login submitted:", values);
    setIsAuthenticated(true); // Simulate successful login (replace with actual logic)
    const res = axios.post("http://localhost:8080/users", values);
    console.log("response ", res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: 100,
      }}
    >
      <FormControl fullWidth margin="normal">
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          required
          autoFocus
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Login
      </Button>
    </form>
  );
};

export default Login;
