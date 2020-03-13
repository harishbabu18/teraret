import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import {searchEmployee} from '../../../redux/index';
import { useSelector,useDispatch } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function EmployeeSearch(){
    const classes = useStyles();
    const dispatch = useDispatch()
    const [searchcolumn, setSearchcolumn] = React.useState('');
    const [search, setSearch] = React.useState('');
  
    // const companydata = useSelector(state => state.company )


    const inputLabel = React.useRef(null);
  


    const handleChange = event => {
        setSearchcolumn(event.target.value);
        console.log("the value of search Column is "+event.target.value)
      };
const handleChangeSearch=(event)=>{
    setSearch(event.target.value);
    console.log("the value of search is "+event.target.value)
}
    return (
      <div>
      <form className={classes.root} noValidate autoComplete="off" >
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Select Column
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={searchcolumn}
          onChange={handleChange}
          //labelWidth={labelWidth}
        >
          
          <MenuItem value="firstName">First Name</MenuItem>
          <MenuItem value="lastNamee">Last Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="mobile">Mobile</MenuItem>
        </Select>
      </FormControl>
        <TextField id="outlined-basic" fullWidth 
        label="Search" variant="outlined" 
        onChange={handleChangeSearch}/>
        
        {/* <TextField id="date" label="Record Created From" type="date" defaultValue=""
                    //onChange={this.handleCompanyDateValue}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
        <TextField id="date" label="Record Created Till" type="date" defaultValue=""
                    //onChange={this.handleCompanyDateValue}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />   */}
             <Button  onClick={() => dispatch(searchEmployee(searchcolumn,search))} >Search</Button> 
      </form>
      </div>
    );


}
export default EmployeeSearch