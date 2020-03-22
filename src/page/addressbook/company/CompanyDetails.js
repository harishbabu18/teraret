import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button ,ButtonGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {SERVER_URL} from '../../../config';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import LanguageIcon from '@material-ui/icons/Language';
import MenuItem from '@material-ui/core/MenuItem';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormLabel from '@material-ui/core/FormLabel';



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
 
class CompanyDetails extends React.Component {


    constructor(props) {
      super(props);
  
      this.state = {
          companyName: '',
          companyDateCreated:'',
          companyDescription:'',
          updatedValue:'',
          fields: {},
          errors: {},
          officeType:[],
          country: '', 
          region: '',
          officeTypeValue:'',
          addressValue:'',
          addressTwoValue:'',
          countryValue:'',
          stateValue:'',
          zipValue:'',
          mobileValue:'',
          websiteValue:'',
          emailValue:'',
          faxValue:'',
          helperTextEmail: '',
          helperTextComapanyName: '',
          helperTextWebsite: '',
          userValue:'',
          
      }
    }





    componentDidMount(){
        
    fetch(SERVER_URL+'/officeType')
    .then(r => r.json())
    .then(json => this.setState({officeType: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));
    console.log("Logged In User is "+JSON.parse(localStorage.auth).data.username);
    console.log(this.state);
    console.log('HIIII',JSON.parse(localStorage.auth).data.username)
    const url = SERVER_URL+"/userByUsername?username="+JSON.parse(localStorage.auth).data.username;
    fetch(url)
    .then(r => r.json())
    .then(json => this.setState({userValue: json.id}))
    .catch(error => console.error('Error retrieving Companies: ' + error));

    }

    onFileLoad = (e, file) => console.log(e.target.result, file.name);

  

  handleCompanyNameValue=(event)=>{

    this.setState({companyName:event.target.value});
  // if(!event.target.value) {
  //     this.setState({ helperTextComapanyName: 'field should not be empty' })
  //   }
  //  else if (event.target.value.match(/^[^A-Za-z0-9]+$/)) {
  //     this.setState({ helperTextComapanyName: '' })
  //     this.setState({companyName:event.target.value});
  //   } 
  

  
    
  }

  handleCompanyDateValue=(event)=>{
    this.setState({companyDateCreated:event.target.value});
    
  }

  handleCompanyDescription=(event)=>{
    this.setState({companyDescription:event.target.value});
    
  }

  handleChangeMobileValue=(event)=>{
    this.setState({mobileValue:event.target.value})
  }

  handleChangeWebsiteValue=(event)=>{
    if(event.target.value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g))
    {
    this.setState({websiteValue:event.target.value})
    this.setState({ helperTextWebsite: '' })
    }
    else
    {
      this.setState({ helperTextWebsite: 'Bad website format' })
    }
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

  handleSubmit=(event)=>{
    event.preventDefault()

    
   
     let CompanyDetail={
      establishedDate:this.state.companyDateCreated,
      description:this.state.companyDescription,
      name:this.state.companyName,
      mobile:this.state.mobileValue,
      website:this.state.websiteValue,
      email:this.state.emailValue,
      fax: this.state.faxValue,
      officeType:this.state.officeTypeValue,
      addresslineone: this.state.addressValue,
      addresslinetwo:this.state.addressTwoValue,
      country: this.state.countryValue,
      state:this.state.stateValue,
      city:this.state.cityValue,
      zip: this.state.zipValue,
      user:this.state.userValue,
    }
    console.log("Company Details establishedDate"+CompanyDetail.establishedDate)
    console.log("Company Details description"+CompanyDetail.description)
    console.log("Company Details name"+CompanyDetail.name)
    console.log("Company Details mobile"+CompanyDetail.mobile)
    console.log("Company Details website"+CompanyDetail.website)
    console.log("Company Details email"+CompanyDetail.email)
    console.log("Company Details fax"+CompanyDetail.fax)
    console.log("Company Details officeType"+CompanyDetail.officeType)
    console.log("Company Details addresslineone"+CompanyDetail.addresslineone)
    console.log("Company Details addresslinetwo"+CompanyDetail.addresslinetwo)
    console.log("Company Details country"+CompanyDetail.country)
    console.log("Company Details state"+CompanyDetail.state)
    console.log("Company Details City"+CompanyDetail.city)
    console.log("Company Details zip"+CompanyDetail.zip)
    console.log("Company Details user"+CompanyDetail.user)

    fetch(SERVER_URL+'/company', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(CompanyDetail)
    }).then(r=> r.json()).then(json =>{
      let updatedValue = this.state.updatedValue;
      if(typeof json.total==='undefined'){
        updatedValue="";
        if(typeof json.message==='undefined'){
          updatedValue += "Company is Added Successfully"
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
        companyDateCreated:'',
        companyDescription:'',
        companyName:'',
        mobileValue:'',
        websiteValue:'',
        emailValue:'',
        faxValue:'',
        officeTypeValue:'',
        addressValue:'',
        addressTwoValue:'',
        countryValue:"",
        stateValue:'',
        cityValue:'',
        zipValue:'',
      })

    }



  render() {
    const { classes } = this.props;

    const { country, region } = this.state;

   
      return(

        <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={6} md={12}>
          <ButtonGroup fullWidth aria-label="full width button group">

          <Button className={classes.content} href="/addressbook/company/list">List Company</Button>


          <Button className={classes.content} href="/addressbook/company/create">Create Company</Button>
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
    Create Company Profile
   </Typography>
   <Button
     variant="contained"
     component="label"
     >
     Company Logo
    <input
    type="file"
    style={{ display: "none" }}
     />
   </Button>
   <TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Company Name"
          style={{ margin: 8 }}
          placeholder="Company Name "
          fullWidth
          margin="normal"
          onChange={this.handleCompanyNameValue}
          helperText= {this.state.helperTextComapanyName}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         

          
    <form >
  <TextField
    id="date"
    label="Company Created On"
    type="date"
    defaultValue=""
    onChange={this.handleCompanyDateValue}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>

<TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Company Description"
          style={{ margin: 8 }}
          placeholder="Company Description "
          fullWidth
          margin="normal"
          onChange={this.handleCompanyDescription}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
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
     label="Website"
     style={{ margin: 8 }}
     fullWidth
     margin="normal"
     onChange={this.handleChangeWebsiteValue}
     helperText= {this.state.helperTextWebsite}
     InputLabelProps={{
       shrink: true,
     }}
     InputProps={{
      startAdornment: <InputAdornment position="start">
        <LanguageIcon />
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
   <TextField
     id="outlined-full-width"
     label="Fax"
     style={{ margin: 8 }}
     placeholder="Fax"
     fullWidth
     margin="normal"
     onChange={this.handleChangeFaxValue}
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
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Office Type"
                          value={this.state.officeTypeValue}
                          onChange={this.handleOfficeTypeValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.officeType.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                  </MenuItem>
                              ))}
                          </TextField>

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
);
}}

export default  withStyles(useStyles)(CompanyDetails);