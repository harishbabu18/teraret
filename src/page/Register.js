import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from "../teraret.svg";
import InputfieldComponent from "../components/TextfieldComponent";
import Forms from "../components/RegisterFormComponent";
import Copyright from "../components/CopyrightComponent";
import useStyles from "../components/StylesComponent";

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
          <Forms >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputfieldComponent
                  name = 'fname'
                  idname = 'FirstName'
                  labelname = 'First Name'
                  type = 'text'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputfieldComponent
                  name = 'fname'
                  idname = 'lastnamae'
                  labelname = 'Last Name'
                  type = 'text'
                />
              </Grid>
              <Grid item xs={12}>
                <InputfieldComponent
                  name = 'emil'
                  idname = 'Emailaddress'
                  labelname = 'Email Address'
                  type = 'email'
                />
              </Grid>
              <Grid item xs={12}>
                <InputfieldComponent
                  name = 'password'
                  idname = 'Password'
                  labelname = 'Password'
                  type = 'password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
          
          </Forms>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
    </Container>
  );
}