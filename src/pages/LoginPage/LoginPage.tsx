import { useState, ChangeEvent } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { loginSuccess, loginFailure } from "store/actions/authActions";
import { authApi } from "services/modules/authApi";

const boxStyle = {
  mt: 8,
  p: 3,
  boxShadow: 3,
  borderRadius: 2,
};

const buttonStyle = { mt: 2 };

const authApiInstance = authApi();

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async(e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      return;
    }

    const response = await authApiInstance.login(
      formData.name,
      formData.email,
    );

    if (!response.ok) {
      const error = await response.json();
      dispatch(loginFailure(error.error));
      return;
    }

    dispatch(loginSuccess());

    window.location.href = "/";
  };

  return (
    <Container maxWidth="xs">
      <Box sx={boxStyle}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={buttonStyle}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};
