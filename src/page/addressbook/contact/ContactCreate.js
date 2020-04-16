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
import SERVER_URL from '../../../config';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormLabel from '@material-ui/core/FormLabel';
import AsynchronousDropdown from '../../../components/AsynchronousDropdown';
import axios from 'axios';

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
      dob:'',
      note:'',
      companyValue: '',
      positionValue: '',

      addressValue:'',
      addressTwoValue:'',
      countryValue:'',
      stateValue:'',
      cityValue:'',
      zipValue:'',
      mobileValue:'',
      websiteValue:'',
      emailValue:'',
      faxValue:'',
      updatedValue:'',
      userValue:'',
      avatar:''
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

    console.log("Logged In User is "+JSON.parse(localStorage.auth).data.id);
    this.setState({userValue: JSON.parse(localStorage.auth).data.id});
  }




  handleFile(e){
    console.log(e.target.files)
    console.log(e.target.files[0])
    this.setState({avatar:e.target.files[0]})

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

  handleChangeNote=(event)=>{
    this.setState({note:event.target.value});

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

  handleChangeCityValue=(event)=>{
    this.setState({cityValue:event.target.value})
  }

  handleChangeZipValue=(event)=>{
    this.setState({zipValue:event.target.value})
  }

  selectCountry (val) {
    this.setState({ countryValue: val });
  }
 
  selectRegion (val) {
    this.setState({ stateValue: val });
  }
  
 handleChangeDemo = (event,value) => {
   if (value === null){
     this.setState({companyValue:value})
   }else{
    this.setState({companyValue:value.id})

   }
}


  handleSubmit=(event)=>{
    event.preventDefault()

    let formdata = new FormData()

    console.log("Value of Profile Image is"+this.state.avatar)
   
   if(this.state.avatar!==''){
     console.log("Inside Not null")
    formdata.append('featuredImageFile',this.state.avatar)
    }
    
   

    if(this.state.note!==''){
    formdata.append('note',this.state.note)
    }
    formdata.append('firstName',this.state.firstname)
    formdata.append( 'lastName',this.state.lastname)
    
    
    if(this.state.addressTwoValue!==''){
    formdata.append('addresslinetwo',this.state.addressTwoValue)
    }
    formdata.append('dob',this.state.dob)
    formdata.append( 'company',this.state.companyValue)
    formdata.append('position',this.state.positionValue)
    formdata.append( 'mobile',this.state.mobileValue)
    formdata.append('email',this.state.emailValue)
    formdata.append( 'addresslineone',this.state.addressValue)
    formdata.append( 'country',this.state.countryValue)
    formdata.append( 'state',this.state.stateValue)
    formdata.append('city',this.state.cityValue)
    formdata.append('zip', this.state.zipValue)
    formdata.append('user',this.state.userValue)

    axios({
      method: 'post',
      url: SERVER_URL+'/contact',
      data: formdata
    }).then(json =>{
      let updatedValue = this.state.updatedValue;
      updatedValue="Added Successfully ID "+json.data.id
      this.setState({updatedValue}) 

    }).catch(error =>{
        console.error("The Error Message is "+error.response.data.total)
        let updatedValue = this.state.updatedValue;
          if(typeof error.response.data.total==='undefined'){
        updatedValue="";
        updatedValue +=error.response.data.message;
        
      }
      else{
         updatedValue = "Errors Are "
         for(let i=0;i<error.response.data.total;i++){
          updatedValue +=error.response.data._embedded.errors[i].message
           
         }
      }
      this.setState({updatedValue}) 
  
     
      });
   
   };

    handleclear=(event)=>{
      event.preventDefault()
      document.getElementById("create-course-form").reset()

      this.setState( {
        firstname:'',
        lastname:'',
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
        cityValue:'',
        zipValue:'',
        avatar:'',
        note:'',

        helperTextEmail: '',
      })

    }


  render(){
  const {classes} = this.props;

  return (
<div>
  <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={12} md={12}>

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

                    <AsynchronousDropdown 
                      handleChange={this.handleChangeDemo}
                      address={'companyList'}
                      label = {'Choose Company'}
                      name =  {'company'} />

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



<Button
     variant="contained"
     component="label"
     >
     Upload Profile Picture
    <input
    name="file"
    type="file"
    onChange={(e)=>this.handleFile(e)}
    style={{ display: "none" }}


     />
   </Button>



   <TextField
                        id="outlined-full-width"
                        label="Note"
                        style={{ margin: 8 }}
                        placeholder='Note'
                        fullWidth
                        margin="normal"
                        onChange={this.handleChangeNote}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        
                        variant="outlined"
                    />


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
  <FormLabel component="legend">Country</FormLabel>
    <CountryDropdown
          value={this.state.countryValue}
          onChange={(val) => this.selectCountry(val)} 
          style={{
            background:'white',
            fontSize: 18,
            width:300,
            height:50
          }}
          />
   <FormLabel component="legend">State/Region</FormLabel>      
   <RegionDropdown
          country={this.state.countryValue}
          value={this.state.stateValue}
          onChange={(val) => this.selectRegion(val)}
          style={{
            background:'white',
            fontSize: 18,
            width:300,
            height:50
          }}          
          />

<TextField
     id="outlined-full-width"
     label="City"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeCityValue}
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
       Reset
      </Button>
      </ButtonGroup>
    
      <div className={classes.root}>
          {this.state.updatedValue}
        
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