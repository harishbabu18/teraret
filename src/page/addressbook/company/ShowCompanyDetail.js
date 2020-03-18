import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ButtonGroup} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));


// export default  withStyles(useStyles)(CompanyDetail);



export default function CompanyDetail() {
  const classes = useStyles();
    const[open,setOpen] = React.useState(false)
    const [id,setId] = React.useState()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  
  const handleClickOpen = (e) => {
    console.log(e.target.id)
    setId(e.target.id)
    console.log(id)
     setOpen(true)
    }
  ;

  const handleClose = (e) => {
    console.log(e.target.id)
    
       setOpen(false);
    
  }
  

  return (
    <div>

      <Grid container component="main" className={classes.root}>
         
         <Grid item  sm={12} md={12}  component={Paper} elevation={6} square>

         <Paper square>
         <ButtonGroup fullWidth aria-label="full width outlined button group">
         <Button id='generalinfo' onClick={handleClickOpen} > 
          <span id = 'generalinfo'>General Info</span>
           </Button>
         <Button id="activity" onClick={handleClickOpen} >
          <span id = 'activity'> Activity </span> 
         </Button>         
         <Button id="ticket" onClick={handleClickOpen} >
         <span id = 'ticket'> Ticket </span> 
         </Button>
         <Button id="opportunity" onClick={handleClickOpen} >
         <span id = 'opportunity'> Opportunity </span>
          </Button>
         <Button id="offer" onClick={handleClickOpen} >
         <span id = 'offer'> Offer </span>
          </Button>
         <Button id="subscription" onClick={handleClickOpen} >
         <span id = 'subscription'> Subscription </span> </Button>
         <Button id="order" onClick={handleClickOpen} >
         <span id = 'order'> Order  </span> 
         </Button>
         <Button id="accounting" onClick={handleClickOpen} >
         <span id = 'accounting'> Accounting </span> </Button>

       </ButtonGroup>
         </Paper>

         </Grid>
    </Grid>


 
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
   {(() => {
        switch (id) {
          case "generalinfo":
            return(

              <div>

                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                  generalinfo
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='generalinfo' >Close</span>

                    </Button>
                  
                  </DialogActions>
                  </div>
            )

              case 'activity':
                return(
                  <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                    Activity
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='activity' >Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                )

                case 'ticket':
                  return(
                    <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Ticket
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='ticket' >Close</span>

                    </Button>
                  
                  </DialogActions>
                  </div>
                  )

                    case 'opportunity':
                      return(
                        <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Opportunity
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='opportunity' >Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                      )

                  case 'offer':
                    return (
                      <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                  offer
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='offer' >Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                    )
                
                case 'subscription':
                  return (
                    <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Subscription
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='subscription' >Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                  )

                case 'order':
                  return(
                    <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                    order
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='ordedr' >Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                  )

                case 'accounting':
                  return (
                <div>
                  <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                  Accounting
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                      <span id='accounting'>Close</span>
                    </Button>
                  
                  </DialogActions>
                  </div>
                  )
                  default :
                  return(
                    <div>
                      higbhbj
                      <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                    <span id='generalinfo' >Close</span>

                    </Button>
                  
                  </DialogActions>
                      </div>
                  )

        }
      }
      )()}
      </Dialog>
      
    </div>
  );
}
