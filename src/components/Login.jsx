import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

// Define styles using Material UI's makeStyles function
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ handleLogin }) => {
  const classes = useStyles();
  const history = useHistory();

  // State variables to store the username, password, and whether to show the password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handler functions to update the state variables when the input fields are changed
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handler function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the handleLogin function passed in as a prop
    handleLogin(username, password, (loggedIn) => {
      if (loggedIn) {
        // If login is successful, redirect to dashboard page
        history.push("/dashboard");
      } else {
        // If login fails, display error message
        alert("Incorrect username or password.");
      }
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
