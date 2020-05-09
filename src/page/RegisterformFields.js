import React from 'react';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputfieldComponent from "../components/TextfieldComponent";

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}


const RegisterformFields = ({handleChange, values, ...otherProps}) =>{

    return(
        <div>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <InputfieldComponent
                  name = 'firstName'
                  idname = 'FirstName'
                  labelname = 'First Name'
                  onChange = {handleChange, validateEmail}
                  value = {values.firstName}
                  type = 'text'
                />
              </Grid>
              <div>{validateEmail}</div>

              <Grid item xs={12} sm={6}>
                <InputfieldComponent
                  name = 'lastName'
                  idname = 'lastnamae'
                  labelname = 'Last Name'
                  onChange = {handleChange}
                  value = {values.lastName}
                  type = 'text'
                />
              </Grid>

              <Grid item xs={12}>
                <InputfieldComponent
                  name = 'email'
                  idname = 'Emailaddress'
                  labelname = 'Email Address'
                  onChange = {handleChange}
                  value = {values.email}
                  type = 'email'
                />
              </Grid>

              <Grid item xs={12}>
                <InputfieldComponent
                  name = 'password'
                  idname = 'Password'
                  labelname = 'Password'
                  onChange = {handleChange}
                  value = {values.password}
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

        </div>)
}

export default RegisterformFields;