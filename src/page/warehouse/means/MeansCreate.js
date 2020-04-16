import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button ,ButtonGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SERVER_URL from '../../../config';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
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
 
class CreateTransport extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
 
          transport:[],
          address:[],
          unloadingValue: '',
          loadingValue:'',
          scheduleValue:'',
          updatedValue:'',
          userValue:'',
      }
    }

    componentDidMount() {
      
      fetch(SERVER_URL+'/company')
      .then(r => r.json())
      .then(json => this.setState({address: json.company}))
      .catch(error => console.error('Error retrieving company: ' + error));
      console.log("Logged In User is "+JSON.parse(localStorage.auth).data.id);
      this.setState({userValue: JSON.parse(localStorage.auth).data.id});
    }

 
  handleChangeUnloadingValue=(event)=>{
    this.setState({unloadingValue:event.target.value});
    
  }

  handleChangeLoadingValue=(event)=>{
    this.setState({loadingValue:event.target.value});

  }
  handleChangeScheduleValue=(event)=>{
    this.setState({scheduleValue:event.target.value});

  }


  handleSubmit=(event)=>{
    event.preventDefault()

    let formatData = new FormData();

    formatData.append('unloading',this.state.unloadingValue)
    formatData.append('loading',this.state.loadingValue)
    formatData.append('schedule',this.state.scheduleValue)
    // formatData.append('unloading',this.state.userValue) 
    

    axios( { 
      method: 'POST',
      url : SERVER_URL+'/mean',
      data: formatData
    })
    .then(json =>{
    let updatedValue = this.state.updatedValue;
    updatedValue="Added Successfully ID "+json.data.id
    this.setState({updatedValue}) 
  })
  .catch(error =>{
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
         
        unloadingValue: '',
        loadingValue:'',
        scheduleValue:'',
        updatedValue:'',
        userValue:'',
        
      })

    }



  render() {
    const { classes } = this.props;

      return(
        <div>
        <div  component="main" className={classes.root}  >
              <div  className={classes.root}  >
                <Grid sm={12} md={12}>
           <ButtonGroup fullWidth aria-label="full width outlined button group">
           <Button className={classes.content} href="/warehouse/means/list">List Means</Button>
           <Button className={classes.content} href="/warehouse/means/create">Create Means</Button>
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
    Create Means
   </Typography>
                        <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Loading"
                          value={this.state.loadingValue}
                          onChange={this.handleChangeLoadingValue.bind(this)}
                          variant="outlined"
                        >
                          {this.state.address.map(option =>(
                              <MenuItem key={option.id} value={option.id}>
                                  {option.addresslineone}
                              </MenuItem>
                          ))}
                        </TextField>

                        <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Unloading"
                          value={this.state.unloadingValue}
                          onChange={this.handleChangeUnloadingValue.bind(this)}
                          variant="outlined"
                        >
                          {this.state.address.map(option =>(
                              <MenuItem key={option.id} value={option.id}>
                                  {option.addresslineone}
                              </MenuItem>
                          ))}
                        </TextField>

                        <TextField
                          id="Schedule Date"
                          label="Schedule Date"
                          placeholder="Schedule Date"
                          type="date"
                          defaultValue=""
                          onChange={this.handleChangeScheduleValue}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />

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
      )



}
      }

export default  withStyles(useStyles)(CreateTransport);