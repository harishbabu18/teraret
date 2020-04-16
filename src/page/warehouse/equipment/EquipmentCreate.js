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
import AsynchronousDropdown from '../../../components/AsynchronousDropdown';

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
 
class CreateEquipment extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
          
          nameValue: '',
          descriptionValue:'',
          serialValue:'',
          typeValue:'',
          purchasePriceValue:'',
          saleValue:'',
          fields: {},
          errors: {},
          equipmentType:[],
          supplierType: [],
          supplierValue:'',
          thresholdValue:'',
          userValue:'',
          deadline:''
          
      }
    }

    componentDidMount(){
        
    fetch(SERVER_URL+'/equipmentType')
    .then(r => r.json())
    .then(json => this.setState({equipmentType: json.equipmentType}))
    .catch(error => console.error('Error retrieving Equipment: ' + error));

    fetch(SERVER_URL+'/supplier')
    .then(r => r.json())
    .then(json => this.setState({supplierType: json.supplier}))
    .catch(error => console.error('Error retrieving Supplier: ' + error));

    console.log("Logged In User is "+JSON.parse(localStorage.auth).data.id);
    this.setState({userValue: JSON.parse(localStorage.auth).data.id});

   

    }


  handleChangeNameValue=(event)=>{
    this.setState({nameValue:event.target.value});
    
  }

  handleChangeDescriptionVAlue=(event)=>{
    this.setState({descriptionValue:event.target.value});
    
  }

  handleChangeSerialValue=(event)=>{
    this.setState({serialValue:event.target.value});
    
  }


  handleChangedeadline=(event)=>{
    this.setState({deadline:event.target.value});
    
  }

  handleChangeTypeValue=(event)=>{
    this.setState({typeValue:event.target.value});
    
  }

  handleChangeSupplierValue=(event)=>{
    this.setState({supplierValue:event.target.value})
  }

  handleChangeThresholdValue=(event)=>{
    this.setState({thresholdValue:event.target.value})
  }

  handleChangePurchasePriceValue=(event)=>{
    this.setState({purchasePriceValue:event.target.value})
  }

  handleChangeSalePriceValue=(event)=>{
    this.setState({saleValue:event.target.value})
  }



  handleSubmit=(event)=>{
    event.preventDefault()

    let formData = new FormData()

    formData.append('name', this.state.nameValue)
    formData.append('description', this.state.descriptionValue)
    formData.append('equipmentType', this.state.typeValue)
    formData.append('serialNumber', this.state.serialValue)
    formData.append('purchaseprice', this.state.purchasePriceValue)
    formData.append('salesprice', this.state.saleValue)
    formData.append('supplier', this.state.supplierValue)
    formData.append('threshold', this.state.thresholdValue)
    formData.append('user', this.state.userValue)
    formData.append('deadline', this.state.deadline)
 

    axios( { 
      method: 'POST',
      url:SERVER_URL+'/equipment',
      data: formData
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
         
        nameValue: '',
        descriptionValue:'',
        serialValue:'',
        typeValue:'',
        purchasePriceValue:'',
        saleValue:'',
        supplierValue:'',
        thresholdValue:'',
        userValue:'',
        deadline:''
        
      })

    }



  render() {
    const { classes } = this.props;
   
      return(

        <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={12} md={12}>
          <ButtonGroup fullWidth aria-label="full width button group">

          <Button className={classes.content} href="/warehouse/equipment/list">List Equipment</Button>


          <Button className={classes.content} href="/warehouse/equipment/create">Create Equipment</Button>
          </ButtonGroup>

          </Grid>
         </div>

         <div className={classes.content}>

         <Card>
          <form id="create-course-form" 
          onSubmit={this.handleSubmit}
           >
            <CardContent >
            <div className={classes.content}>


    <Grid container component="main">
    <Grid item  sm={12} md={6} >
      <div className={classes.root}>


   <Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
    Create Equipment
   </Typography>
                        <TextField
                          id="outlined-uncontrolled"
                          label="Name"
                          margin="normal"
                          onChange={this.handleChangeName}
                      
                          variant="outlined"
                        />

                        <TextField
                          id="outlined-uncontrolled"
                          label="Description"
                          margin="normal"
                          onChange={this.handleChangeDescriptionVAlue}
                      
                          variant="outlined"
                          />

                        <TextField
                          id="outlined-uncontrolled"
                          label="Serial"
                          margin="normal"
                          onChange={this.handleChangeSerialValue}
                      
                          variant="outlined"
                          />

                            
<TextField
    id="date"
    label="Dead Line"
    type="date"
    onChange={this.handleChangedeadline}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />

                        <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Type"
                          value={this.state.typeValue}
                          onChange={this.handleChangeTypeValue.bind(this)}
                          variant="outlined"
                          >
                              {this.state.equipmentType.map(option =>(
                                  <MenuItem key={option.id} value={option.id}>
                                      {option.name}
                                  </MenuItem>



                              ))}
                          </TextField>
                          {/* <AsynchronousDropdown 
                            handleChange={this.handleChangeDemo}
                            address={'equipmentType'}
                            label = {'Choose Equipment'}
                            name = {'equipment'}
                          /> */}
                </div>
              </Grid>

            <Grid item  sm={12} md={6} className={classes.content}>
              <div className={classes.content}>

                {/* <Typography className={classes.title} color="primary" variant="h2" component="h1" gutterBottom>
                    Supplier
                </Typography> */}

                        <TextField
                          id="demo-simple-select-outlined-label"
                          select 
                          label="Supplier"
                          value={this.state.supplierValue}
                          onChange={this.handleChangeSupplierValue.bind(this)}
                          variant="outlined"
                        >
                          {this.state.supplierType.map(option =>(
                              <MenuItem key={option.id} value={option.id}>
                                  {option.name}
                              </MenuItem>
                          ))}
                          </TextField>

                          <TextField
                            id="outlined-uncontrolled"
                            label="Threshold"
                            type="number"
                            margin="normal"
                            onChange={this.handleChangeThresholdValue}
                        
                            variant="outlined"
                          />

                          <TextField
                            id="outlined-uncontrolled"
                            label="Purchase Price"
                            type="number"
                            margin="normal"
                            onChange={this.handleChangePurchasePriceValue}
                        
                            variant="outlined"
                          />

                          <TextField
                            id="outlined-uncontrolled"
                            label="Sales Price"
                            type="number"
                            margin="normal"
                            onChange={this.handleChangeSalesValue}
                        
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

export default  withStyles(useStyles)(CreateEquipment);