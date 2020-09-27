import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button ,ButtonGroup} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import {SERVER_URL} from '../config';
import MenuItem from '@material-ui/core/MenuItem';
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
 
class CreateContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company:[],
      position:[],

      firstname:'',
      lastname:'',
      note:'',
      dob:'',
      companyValue: '',
      positionValue: '',

      addressValue:'',
      addressTwoValue:'',
      countryValue:'',
      stateValue:'',
      zipValue:'',
      mobileValue:'',
      websiteValue:'',
      emailValue:'',
      faxValue:'',
      updatedValue:'',
      userValue:'',
    }
  }

  componentDidMount(){

    fetch(SERVER_URL+'/company')
    .then(r => r.json())
    .then(json => this.setState({company: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));



    fetch(SERVER_URL+'/position')
    .then(r => r.json())
    .then(json => this.setState({position: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));

    console.log("Logged In User is "+JSON.parse(localStorage.auth).username);
    console.log(this.state);
    const url = SERVER_URL+"/userByUsername?username="+JSON.parse(localStorage.auth).username;
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({userValue: json.id}))
    .catch(error => console.error('Error retrieving Companies: ' + error));
  }
  
  
  handleChangefirstname=(event)=>{
    this.setState({firstname:event.target.value});
    
  }

  handleChangedob=(event)=>{
    this.setState({dob:event.target.value});
    console.log(this.state.dob)
  }

  handleChangelastname=(event)=>{
    this.setState({lastname:event.target.value});

  }

  handleChangecompany=(event)=>{
    this.setState({companyValue:event.target.value});
    console.log(this.state.companyValue)
    // console.log(event.target.value)

  }

  handleChangeposition=(event)=>{
    this.setState({positionValue:event.target.value});
    console.log(this.state.positionValue)

  }

  handleChangenote=(event)=>{
    this.setState({note:event.target.value});

  }


  handleChangeMobileValue=(event)=>{
    this.setState({mobileValue:event.target.value})
  }

  handleChangeWebsiteValue=(event)=>{
    this.setState({websiteValue:event.target.value})
  }

  handleChangeEmailValue=(event)=>{
    if(event.target.value.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/))
    {
    this.setState({emailValue:event.target.value})
    this.setState({ helperTextEmail: '' })
    }
    else{
      this.setState({ helperTextEmail: 'Bad email format' })

    }
  }

  handleChangeFaxValue=(event)=>{
    this.setState({faxValue:event.target.value})
  }

  handleOfficeTypeValue=(event)=>{
    this.setState({officeTypeValue:event.target.value});
    
  }

  handleChangeAddressValue=(event)=>{
    this.setState({addressValue:event.target.value})
  }

  handleChangeAddressTwoValue=(event)=>{
    this.setState({addressTwoValue:event.target.value})
  }

  handleChangeCountryValue=(event)=>{
    this.setState({countryValue:event.target.value})
  }

  handleChangeStateValue=(event)=>{
    this.setState({stateValue:event.target.value})
  }

  handleChangeZipValue=(event)=>{
    this.setState({zipValue:event.target.value})
  }
  
  handleSubmit=(event)=>{
    event.preventDefault()
    let ContactDetail={
      firstName:this.state.firstname,
      lastName:this.state.lastname,
      //

      note:this.state.note,

      //
      dob:this.state.dob,
      company:this.state.companyValue,
      position:this.state.positionValue,

      mobile:this.state.mobileValue,
      email:this.state.emailValue,
      addresslineone: this.state.addressValue,
      addresslinetwo:this.state.addressTwoValue,
      country: this.state.countryValue,
      state:this.state.stateValue,
      zip: this.state.zipValue,
      user:this.state.userValue

    }
    console.log(ContactDetail)


    fetch(SERVER_URL+'/contact', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ContactDetail)
    }).then(r=> r.json()).then(json =>{
      let updatedValue = this.state.updatedValue;
      if(typeof json.total==='undefined'){
        updatedValue="";
        if(typeof json.message==='undefined'){
          updatedValue += "Contact is Added Successfully"
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
    };

    handleclear=(event)=>{
      event.preventDefault()
      document.getElementById("create-course-form").reset()

      this.setState( {
        firstname:'',
        lastname:'',
        note:'',
        dob:'',
        companyValue: '',
        positionValue: '',
        mobileValue:'',
        websiteValue:'',
        emailValue:'',
        faxValue:'',
        addressValue:'',
        addressTwoValue:'',
        countryValue:"",
        stateValue:'',
        zipValue:'',

        helperTextEmail: '',
      })

    }


  render(){
  const {classes} = this .props;

  return (
<div>
  <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={6} md={12}>
          <ButtonGroup fullWidth aria-label="full width button group">

          <Button className={classes.content} href="/addressbook/contact/list">List Contact</Button>
        

          <Button className={classes.content} href="/addressbook/contact/create">Create Contact</Button>
          </ButtonGroup>

          </Grid>
         </div>

         <div className={classes.content}>

         <Card>
          <form id="create-course-form" onSubmit={this.handleSubmit} >
            <CardContent >
            <div className={classes.content}>


    <Grid container component="main">
    <Grid item  sm={12} md={4} >
      <div className={classes.root}>


   <Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
    Create Contact Profile
   </Typography>


      
   <TextField
     id="outlined-full-width"
     label="First Name"
     style={{ margin: 8 }}
     placeholder="First Name"
     fullWidth
     margin="normal"
     onChange={this.handleChangefirstname}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <AccountCircle />
        </InputAdornment>,
    }}
     variant="outlined"
   />
   <TextField
     id="outlined-full-width"
     label="Last Name"
     style={{ margin: 8 }}
     placeholder="Last Name"
     fullWidth
     margin="normal"
     onChange={this.handleChangelastname}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <AccountCircle />
        </InputAdornment>,
    }}
     variant="outlined"
   />
   <TextField
     id="outlined-full-width"
     label="Note"
     style={{ margin: 8 }}
     placeholder="Note"
     fullWidth
     margin="normal"
     onChange={this.handleChangenote}
     InputLabelProps={{
       shrink: true,
     }}
     variant="outlined"
   />
                      <TextField
                        id="company"
                        select 
                        label="Company"
                        value={this.state.companyValue}
                        onChange={this.handleChangecompany.bind(this)}
                        variant="outlined"
                        >
                            {this.state.company.map(option =>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                        id="position"
                        select 
                        label="Position"
                        value={this.state.positionValue}
                        onChange={this.handleChangeposition.bind(this)}
                        variant="outlined"
                        >
                            {this.state.position.map(option =>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>

      <TextField
    id="date"
    label="Date Of Birth"
    type="date"
    onChange={this.handleChangedob}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  

  </div>
</Grid>
<Grid item  sm={12} md={4} className={classes.content}>
<div className={classes.content}>

<Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
    Create Contact
</Typography>
<TextField
     id="outlined-full-width"
     label="Mobile"
     style={{ margin: 8 }}
     type='number'
     placeholder="Mobile"
     fullWidth
     margin="normal"
     onChange={this.handleChangeMobileValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <PhoneAndroid />
        </InputAdornment>,
    }}
     variant="outlined"
   />

   <TextField
     id="outlined-full-width"
     label="Email"
     style={{ margin: 8 }}
     placeholder="E-Mail"
     fullWidth
     margin="normal"
     onChange={this.handleChangeEmailValue}

     helperText= {this.state.helperTextEmail}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <Email />
        </InputAdornment>,
    }}
     variant="outlined"
   />
  
   </div>
</Grid>

<Grid item  sm={12} md={4} className={classes.content} >
<div className={classes.content}>

<Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
    Create Address
</Typography>


                   
<TextField
     id="outlined-full-width"
     label="Address"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeAddressValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        </InputAdornment>,
    }}
     variant="outlined"
   />

<TextField
     id="outlined-full-width"
     label="Address Line Two"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeAddressTwoValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        </InputAdornment>,
    }}
     variant="outlined"
   />
<TextField
     id="outlined-full-width"
     label="Country"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeCountryValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        </InputAdornment>,
    }}
     variant="outlined"
   />

<TextField
     id="outlined-full-width"
     label="State"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeStateValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        </InputAdornment>,
    }}
     variant="outlined"
   />

<TextField
     id="outlined-full-width"
     label="Zip"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeZipValue}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        </InputAdornment>,
    }}
     variant="outlined"
   />

</div>
</Grid>

</Grid>
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

  </div>
  </CardContent>

</form>
</Card>
</div>
</div>
</div>
);
}}

export default  withStyles(useStyles)(CreateContact);