import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from "../teraret.svg";
import Forms from "../components/RegisterFormComponent";
import Copyright from "../components/CopyrightComponent";
import useStyles from "../components/StylesComponent";
import validate from '../components/RegisterValidations';

export default function Register() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo}  className={classes.logo} alt="Teraret"/>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Forms
            address = "register"
            validate = {validate}/>
           
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
    </Container>
  );
}