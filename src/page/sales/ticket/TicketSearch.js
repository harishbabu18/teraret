import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {searchTickets} from '../../../redux/index';
import { useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function TicketSearch(){
    const classes = useStyles();
    const dispatch = useDispatch()
    const [searchcolumn, setSearchcolumn] = React.useState('');
    const [search, setSearch] = React.useState('');
  

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
          label = "Select Column"
          // labelWidth={labelWidth}
        >
          <MenuItem value="ticket">Ticket</MenuItem>
          <MenuItem value="contact">Contact</MenuItem>
          <MenuItem value="ticketStatus">Ticket Status</MenuItem>
        </Select>
      </FormControl>
        <TextField id="outlined-basic" fullWidth 
        label="Search" variant="outlined" 
        onChange={handleChangeSearch}/>

        
        {/* <TextField id="date" label="Record Created From" type="date" defaultValue=""
                    //onChange={this.handleTicketDateValue}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
        <TextField id="date" label="Record Created Till" type="date" defaultValue=""
                    //onChange={this.handleTicketDateValue}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />   */}
             <Button
              variant="contained"
             color="primary"
             startIcon={<SearchIcon />}
             onClick={() => dispatch(searchTickets(searchcolumn,search))} >
               Search
            </Button> 
      </form>
      </div>
    );


}
export default TicketSearch