import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button ,ButtonGroup} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import SERVER_URL from '../../../config';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Barcode from 'react-barcode';


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
 
class CreateProduct extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      // description:[],
      name :[],
      nameValue:'',
      barcode:'',
      quantity: 0,
      quantityType:[],
      quantityTypeValue: '',
      price: 0,
      createdBy:1,
      address:[],
      addressValue:'',
      numberValue:0,
      lot:[],
      lotValue:'',
      userValue:'',

      
    }
  }
  componentDidMount() {
    fetch(SERVER_URL+'/quantityType')
    .then(r => r.json())
    .then(json => this.setState({quantityType: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));
    

    fetch(SERVER_URL+'/productName')
    .then(r => r.json())
    .then(json => this.setState({name: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));


    fetch(SERVER_URL+'/lot')
    .then(r => r.json())
    .then(json => this.setState({lot: json}))
    .catch(error => console.error('Error retrieving Tickrts: ' + error));
    console.log("Logged In User is "+JSON.parse(localStorage.auth).data.id);
    this.setState({userValue: JSON.parse(localStorage.auth).data.id});



    // fetch(SERVER_URL+'/address')
    // .then(r => r.json())
    // .then(json => this.setState({address: json}))
    // .catch(error => console.error('Error retrieving Tickrts: ' + error));




  
  }

  handleChangename=(event)=>{
    this.setState({nameValue:event.target.value});
  }

  handleChangeNumberValue=(event)=>{
    this.setState({numberValue:event.target.value});
  }
  
  handleChangebarcode=(event)=>{
    this.setState({barcode:event.target.value});

  }

  handleChangequantity=(event)=>{
    this.setState({quantity:event.target.value});


  }
  handleChangequantityValue=(event)=>{
    this.setState({quantityTypeValue:event.target.value});


  }
  handleChangeprice=(event)=>{
    this.setState({price:event.target.value});

  }
  handleChangeaddress=(event)=>{
    this.setState({addressValue:event.target.value});

  }

  handleChangelot=(event)=>{
    this.setState({lotValue:event.target.value});

  }


  handleSubmit=(event)=>{
    event.preventDefault() 
    let product = {
     name:this.state.nameValue,
    // name:1,
     barcode:this.state.barcode,
     quantity:this.state.quantity,
     quantityType:this.state.quantityTypeValue,
     price:this.state.price,
     number:this.state.numberValue,
     lot:this.state.lotValue,
     createBy:this.state.userValue,

    }
    console.log('Test'+JSON.stringify(product))
    fetch(SERVER_URL+'/product', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(r=> r.json()).then(json =>{
      let updatedValue = this.state.updatedValue;
      if(typeof json.total==='undefined'){
        updatedValue="";
        if(typeof json.message==='undefined'){
          updatedValue += "Product is Added Successfully"
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
        nameValue:'',
        barcode:'',
        quantity:'',
        quantityTypeValue:'',
        price:'',
        numberValue:'',
        lotValue:'',
      })

    }



  render() {
    const { classes} = this.props;
   
    let Total=0;
    Total=parseFloat(this.state.price)*parseFloat(this.state.numberValue)
    
 
  return (


<div>
  <div  component="main" className={classes.root}  >
        <div  className={classes.root}  >
          <Grid sm={12} md={12}>
     <ButtonGroup fullWidth aria-label="full width outlined button group">
     <Button className={classes.content} href="/warehouse/product/list">List Product</Button>
     <Button className={classes.content} href="/warehouse/product/create">Create Product</Button>
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
               Create Product Profile
           </Typography>

   
               <TextField
                        id="demo-simple-select-outlined-label"
                        select 
                        label="Product Name"
                        value={this.state.nameValue}
                        onChange={this.handleChangename}
                        variant="outlined"
                        >
                            {this.state.name.map(option =>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
             <TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Price"
          style={{ margin: 8 }}
          placeholder="Price"
          fullWidth
          margin="normal"
          onChange={this.handleChangeprice}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
             
             <TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Number of Items"
          style={{ margin: 8 }}
          placeholder="Number of Items"
          fullWidth
          margin="normal"
          onChange={this.handleChangeNumberValue}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            
             <TextField
          id="outlined-full-width"
          className={classes.textField}
          label="Barcode"
          style={{ margin: 8 }}
          placeholder="Barcode"
          fullWidth
          margin="normal"
          onChange={this.handleChangebarcode}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <Barcode id= 'barcodeValue' value={this.state.barcode} />,

             
     
             <TextField
                        id="demo-simple-select-outlined-label"
                        select 
                        label="Lot"
                        value={this.state.lotValue}
                        onChange={this.handleChangelot}
                        variant="outlined"
                        >
                            {this.state.lot.map(option =>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.lotname}
                                </MenuItem>
                            ))}
                        </TextField>
    

            
             <TextField
          id="outlined-full-width"
          className={classes.textField}
          type='Number'
          label="Quantity"
          style={{ margin: 8 }}
          placeholder="Quantity"
          fullWidth
          margin="normal"
          onChange={this.handleChangequantity}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
             
  
             <TextField
                        id="demo-simple-select-outlined-label"
                        select 
                        label="Quantity Type"
                        value={this.state.quantityTypeValue}
                        onChange={this.handleChangequantityValue}
                        variant="outlined"
                        >
                            {this.state.quantityType.map(option =>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                            <h3>Total : {Total}</h3>

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

export default  withStyles(useStyles)(CreateProduct);