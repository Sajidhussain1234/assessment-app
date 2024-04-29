import React from "react";
import { Button, TextField, FormControl } from "@mui/material";
import useAuthStore from "../store";
import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const { setIsAuthenticated } = useAuthStore();

  const handleSubmit = async (values) => {
    // Implement your signup logic here (e.g., API call)
    console.log("Signup submitted:", values);
    setIsAuthenticated(true); // Simulate successful signup (replace with actual logic)
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <FormControl fullWidth margin="normal">
    //     <FormLabel>Email</FormLabel>
    //     <TextField
    //       name="email"
    //       label="Email"
    //       type="email"
    //       variant="outlined"
    //       required
    //       autoFocus
    //     />
    //   </FormControl>
    //   <FormControl fullWidth margin="normal">
    //     <FormLabel>Password</FormLabel>
    //     <TextField
    //       name="password"
    //       label="Password"
    //       type="password"
    //       variant="outlined"
    //       required
    //     />
    //   </FormControl>
    //   <FormControl fullWidth margin="normal">
    //     <FormLabel>Confirm Password</FormLabel>
    //     <TextField
    //       name="confirmPassword"
    //       label="Confirm Password"
    //       type="password"
    //       variant="outlined"
    //       required
    //     />
    //   </FormControl>
    //   <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
    //     Sign Up
    //   </Button>
    // </form>

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
      <FormControl fullWidth margin="normal">
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;

// import { Button, FormControl, FormLabel, TextField } from '@mui/material';
