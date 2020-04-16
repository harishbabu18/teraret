import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadOfferings,fetchOfferings} from '../../../redux/index';
import { useSelector,useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import OfferSearch from './OfferSearch';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles( theme => ({
  root: {
    '& > * .MuiTextField-root ': {
      margin: theme.spacing(1),
      marginBottom: 12,


    [theme.breakpoints.down('sm')]: {
        width: '100%',
        display:'Center',

    },
    [theme.breakpoints.up('md')]: {
        width:'100%',
        justify:"center",
      },
      [theme.breakpoints.up('lg')]: {
        width: 305,
        display:'Center',

    },

    },
    display: 'flex',
  },
  title: {
    fontSize: 18,
  },
  table: {
    minWidth: 700,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1,0),
  },



}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);




function OfferingList(){
  const classes = useStyles();
  const offeringdata = useSelector(state => state.offering )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchOfferings(offeringdata.sort,offeringdata.order,10,0))
   },[])

  return offeringdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): offeringdata.error ? (
          <h1>{offeringdata.error}</h1>
            ) : (
          
              <div> 
                  <OfferSearch />
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/sales/offer/list">List Offer</Button>
                  <Button className={classes.content} href="/sales/offer/create">Create Offer</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                  <Hidden only={['sm', 'xs']}>
                    <StyledTableCell key = 'id' >
                    <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("id",offeringdata.order==="desc"?"asc":"desc",10,0))}
                    >
                       Offer ID
                    </TableSortLabel>
                    </StyledTableCell>
                   </Hidden>  

                    <StyledTableCell key="logo">
                      <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("company",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                      Company
                       </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="contact">
                    <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("contact",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Contact 
                      </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only={['sm', 'xs']}>


                    <StyledTableCell key="note" >
                      <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("note",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                       Note 
                      </TableSortLabel>   
                    </StyledTableCell>

                    <StyledTableCell key="startDate">
                      <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("startDate",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Start Date 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="endDate" > 
                      <TableSortLabel
                      direction={offeringdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOfferings("endDate",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        End Date 
                      </TableSortLabel>    
                    </StyledTableCell>

                    <StyledTableCell key="protocol" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("protocol",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Protocol
                        </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="approximatedealamount" > 
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("approximatedealamount",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Aprox. Deal Amount
                      </TableSortLabel>
                     </StyledTableCell>

                    <StyledTableCell key="dealamount" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("dealamount",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Deal Amount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="paymentmethod" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("paymentmethod",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Payment Method 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="discount" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("discount",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Discount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="iva" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("iva",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        IVA 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="total" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("total",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Total 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="user" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("user",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="dateCreated" >
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("dateCreated",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                       Date Created 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="lastUpdated" > 
                      <TableSortLabel
                        direction={offeringdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOfferings("lastUpdated",offeringdata.order==="desc"?"asc":"desc",10,0))}>
                        Last Updated
                      </TableSortLabel>
                    </StyledTableCell>

                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {offeringdata.offerings.map(offer =>  <StyledTableRow key={offer.id}>
           <StyledTableCell component="th" scope="row">{offer.id}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.company}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.contact}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.note}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.startDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.endDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.protocol }</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.approximatedealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.dealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.paymentmethod}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.discount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.iva}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.total}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.dateCreated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{offer.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Company">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadOfferings(offeringdata.sort,offeringdata.order,offeringdata.max,offeringdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default OfferingList;