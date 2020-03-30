import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button ,ButtonGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import SERVER_URL from '../../../config';


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
 

class CreateTicket extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      submitStatus:'',
      descriptionValue:'',
      ticketStatusType: [],
      ticketStatusTypeValue: '',
      ticketSource:[],
      ticketSourceValue: '',
      company:[],
      companyValue: '',
      employee:[],
      employeeValue:'',
      contact:[],
      contactValue:'',
      updatedValue:'Status',
      userValue:'',
    }
  }
  componentDidMount() {
    fetch(SERVER_URL+'/ticketStatusType')
    .then(r => r.json())
    .then(json => this.setState({ticketStatusType: json}))
    .catch(error => console.error('Error retrieving Tickets: ' + error));

    fetch(SERVER_URL+'/ticketSource')
    .then(r => r.json())
    .then(json => this.setState({ticketSource: json}))
    .catch(error => console.error('Error retrieving TicketStatus: ' + error));

    fetch(SERVER_URL+'/company')
    .then(r => r.json())
    .then(json => this.setState({company: json.company}))
    .catch(error => console.error('Error retrieving Company: ' + error));

    fetch(SERVER_URL+'/employee')
    .then(r => r.json())
    .then(json => this.setState({employee: json.employee}))
    .catch(error => console.error('Error retrieving Employee: ' + error));
   
    fetch(SERVER_URL+'/contact')
    .then(r => r.json())
    .then(json => this.setState({contact: json.contact}))
    .catch(error => console.error('Error retrieving Contact: ' + error));
    console.log("Logged In User is "+JSON.parse(localStorage.auth).data.id);
    this.setState({userValue: JSON.parse(localStorage.auth).data.id});

  }

  handleChange=(event)=>{
    this.setState({descriptionValue:event.target.value});
  }

  handleChangeticketStatusTypeValue(event){
    this.setState({ticketStatusTypeValue:event.target.value});

  }

  handleChangeticketSourceValue(event){
    this.setState({ticketSourceValue:event.target.value});

  }

  handleChangeCompanyValue(event){
    this.setState({companyValue:event.target.value});
    
  }

  handleemployeeeValue(event){
    this.setState({employeeValue:event.target.value});

  }

  handlecontactValue(event){
    this.setState({contactValue:event.target.value});

  }


  handleSubmit=(event)=>{
    event.preventDefault()
    let TicketDetails={
      description:this.state.descriptionValue,
      urgent:false,
      import:false,
      ticketSource:this.state.ticketSourceValue,
      ticketStatus:this.state.ticketStatusTypeValue,
      createdBy:this.state.employeeValue,
      assignedTo:this.state.employeeValue,
      company:this.state.companyValue,
      contact:this.state.contactValue,
      user:this.state.userValue,
    }

    console.log("Verify",TicketDetails)

    fetch(SERVER_URL+'/ticket', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(TicketDetails)
    }).then(r=> r.json()).then(json =>{
      let updatedValue = this.state.updatedValue;
      if(typeof json.total==='undefined'){
        updatedValue="";
        if(typeof json.message==='undefined'){
          updatedValue += "Ticket is Added Successfully"
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
          descriptionValue:'',
          urgent:false,
          import:false,
          ticketSourceValue:'',
          ticketStatusTypeValue:'',
          employeeValue:'',
          companyValue:'',
          contactValue:'',
      })

    }


  render() {
    const { classes } = this.props;

  return (

    <div>
    <div  component="main" className={classes.root}  >
          <div  className={classes.root}  >
            <Grid sm={12} md={12}>
       <ButtonGroup fullWidth aria-label="full width outlined button group">
       <Button className={classes.content} href="/sales/ticket/list">List Ticket</Button>
       <Button className={classes.content} href="/sales/ticket/create">Create Ticket</Button>
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
          {/* <Card className={classes.root} variant="outlined"> */}
              <CardContent >
                  <Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
                      Create Ticket Profile
                  </Typography>

                          <TextField
                          id="outlined-uncontrolled"
                          label="Description"
                          margin="normal"
                          onChange={this.handleChange}
                      
                          variant="outlined"
                          />

                          <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Company"
                          value={this.state.companyValue}
                          onChange={this.handleChangeCompanyValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.company.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                  </MenuItem>
                              ))}
                          </TextField>

                          <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Ticket Source"
                          value={this.state.ticketSourceValue}
                          onChange={this.handleChangeticketSourceValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.ticketSource.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                  </MenuItem>
                              ))}
                          </TextField>

                          <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Ticket Status"
                          value={this.state.ticketStatusTypeValue}
                          onChange={this.handleChangeticketStatusTypeValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.ticketStatusType.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                  </MenuItem>
                              ))}
                          </TextField>

                          <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Assigned To"
                          value={this.state.employeeValue}
                          onChange={this.handleemployeeeValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.employee.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.firstName}
                                  </MenuItem>
                              ))}
                          </TextField>

                          <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Contact"
                          value={this.state.contactValue}
                          onChange={this.handlecontactValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.contact.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.firstName}
                                  </MenuItem>
                              ))}
                          </TextField>

                        <TextField
                          id="outlined-uncontrolled"
                          label="Mobile"
                          type = 'number'
                          margin="normal"
                          onChange={this.handleChange}
                      
                          variant="outlined"
                        />

                        <TextField
                          id="outlined-uncontrolled"
                          label="Email"
                          type="email"
                          margin="normal"
                          onChange={this.handleChange}
                      
                          variant="outlined"
                        />

                        <TextField
                          id="outlined-uncontrolled"
                          label="Fax"
                          margin="normal"
                          onChange={this.handleChange}
                      
                          variant="outlined"
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

export default  withStyles(useStyles)(CreateTicket);