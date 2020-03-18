import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button ,ButtonGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import SERVER_URL from '../../../config';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = theme => ({
  root: {
   
    
    '& .MuiTextField-root ': {
      margin: theme.spacing(1),
      marginBottom: 12,

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    [theme.breakpoints.up('md')]: {
        width:'85%',
      },
      [theme.breakpoints.up('lg')]: {
        width: 295,

    },

    },
    '& .Mui-disabled' :{
        color :"#464141",
      }

  },


  title: {
    fontSize: 18,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1,0),
  },
  Button: {
    width: '100%',
  }


});
 
class CreateEmployee extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      dobValue:'',
      profilepicValue: '',
      joinindateValue: '',
      employee:'',
      firstNameValue:'',
      lastNameValue:'',
      relievingdateValue:'',
      updatedValue:'',
      userValue:'',

      helperTextEmail: '',
    }
  }
  componentDidMount() {

    fetch(SERVER_URL+'/employee')
    .then(r => r.json())
    .then(json => this.setState({employee: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));

    const url = SERVER_URL+"/userByUsername?username="+JSON.parse(localStorage.auth).username;
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({userValue: json.id}))
    .catch(error => console.error('Error retrieving Companies: ' + error));

    }

  handleEmailValue=(event)=>{
    
    if(event.target.value.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/))
    {
    this.setState({emailValue:event.target.value});
    this.setState({ helperTextEmail: '' })
  }
  else{
    this.setState({ helperTextEmail: 'Bad email format' })
  }
}


  handleFirstnameValue=(event)=>{
    this.setState({firstNameValue:event.target.value});

  }

  handleLastNameValue=(event)=>{
    this.setState({lastNameValue:event.target.value});

  }

  handleJoiningDateValue=(event)=>{
    this.setState({joinindateValue:event.target.value});
    
  }

  handleRelievingDateValue=(event)=>{
    this.setState({relievingdateValue:event.target.value});

  }

  handleDobValue=(event)=>{
    this.setState({dobValue:event.target.value});

  }

  handleProfilepicValue=(event)=>{
    this.setState({profilepicValue:'profilpic.jpg'});

  }

  


  handleSubmit=(event)=>{
    event.preventDefault()

    let EmployeeDetail ={
      firstName:this.state.firstNameValue,
      relievingdate:this.state.relievingdateValue,
      joinindate:this.state.joinindateValue,
      lastName:this.state.lastNameValue,
      profilepic:this.state.profilepicValue,
      dob:this.state.dobValue,
      email:this.state.emailValue,
      user:this.state.userValue,
    }
    console.log("Verify",EmployeeDetail)

    fetch(SERVER_URL+'/employee', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(EmployeeDetail)
    }).then(r=> r.json()).then(json =>{
      let updatedValue = this.state.updatedValue;
      if(typeof json.total==='undefined'){
        updatedValue="";
        if(typeof json.message==='undefined'){
          updatedValue += "Employee is Added Successfully"
        } 
        else
        {
          updatedValue +=json.message;
        }
      }
      else{
         updatedValue = "Errors Are "
         for(let i=0;i<json.total;i++){
          updatedValue +=json._embedded.errors[i].message
           
         }

      }
      
    this.setState({updatedValue})
    }).catch(error =>{
     
      console.error("The Error Message is "+error)


   
    } )
    }


    handleclear=(event)=>{
      event.preventDefault()
      document.getElementById("create-course-form").reset()

      this.setState( {
        firstNameValue:'',
        relievingdateValue:'',
        joinindateValue:'',
        lastNameValue:'',
        profilepicValue:'',
        dobValue:'',
        emailValue:'',
      })

    }

  render() {
    const { classes } = this.props;


  return (

<div>
  <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={6} md={12}>
     <ButtonGroup fullWidth aria-label="full width outlined button group">
     <Button className={classes.content} href="/addressbook/employee/list">List Employee</Button>
     <Button className={classes.content} href="/addressbook/employee/create">Create Employee</Button>
   </ButtonGroup>
   </Grid>
         </div>

         <div className={classes.content}>

         <Card>
          <form id="create-course-form" onSubmit={this.handleSubmit} >
            <CardContent >
            <div className={classes.content}>


    <Grid container component="main">
      <div className={classes.root}>

       <CardContent >
           <Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
               Create Employee Profile
           </Typography>


      <TextField
          id="outlined-full-width"
          className={classes.textField}
          label="First Name"
          style={{ margin: 8 }}
          placeholder="First Name "
          fullWidth
          margin="normal"
          onChange={this.handleFirstnameValue}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Last Name"
          style={{ margin: 8 }}
          placeholder="Last Name "
          fullWidth
          margin="normal"
          onChange={this.handleLastNameValue}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<TextField
     id="outlined-full-width"
     label="E-Mail"
     style={{ margin: 8 }}
     placeholder="E-Mail"
     fullWidth
     margin="normal"
     className={classes.textField}
     onChange={this.handleEmailValue}
     disabled

     helperText= {this.state.helperTextEmail}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <Email />
        </InputAdornment>,
        endAdornment:<InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          >
          
        </IconButton>
      </InputAdornment>
    }}
     variant="outlined"
   />
    
    <TextField
    id="date"
    label="Date Of Birth"
    type="date"
    onChange={this.handleDobValue}
    className={classes.textField}

    InputLabelProps={{
      shrink: true,

    }}
    disabled

  />

  
<TextField
    id="date"
    label="Joining Date"
    type="date"
    onChange={this.handleJoiningDateValue}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,

    }}
    disabled

  />

<input
  accept="image/*"
  // id="outlined-full-width"
  className={classes.root}
  onChange={this.handleProfilepicValue}
  style={{ display: 'none' }}
  id="raised-button-file"
  single
  type="file"
            disabled

/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" className={classes.root}>
    Profile Pic
  </Button>
</label> 

  
<TextField
    id="date"
    label="Relieving Date"
    type="date"
    onChange={this.handleRelievingDateValue}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,

    }}
    disabled

  />

<CardActions>
<ButtonGroup fullWidth aria-label="full width outlined button group">
<Button type="Submit" className={classes.Button} variant="contained" size="Medium" color="primary">
          Save
      </Button>
      </ButtonGroup>

      <ButtonGroup fullWidth aria-label="full width outlined button group">
      <Button type='Submit' onClick={this.handleclear} variant="contained" size="Medium" color="primary">
      {/* <input type="reset" defaultValue="Reset" /> */} Reset
      </Button>
      </ButtonGroup>
    
      <div className={classes.root}>
          {this.state.updatedValue}
          {/* <Alert severity="success" color="info">
          {this.state.updatedValue}
          </Alert> */}
      </div>
      </CardActions>

  </CardContent>
  </div>
  </Grid>
  </div>
  </CardContent>
  </form>

</Card>
</div>


</div>
</div>
);
}}


export default  withStyles(useStyles)(CreateEmployee);