import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadDeals,fetchDeals} from '../../../redux/index';
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
import DealSearch from './DealSearch';
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




function DealList(){
  const classes = useStyles();
  const dealdata = useSelector(state => state.deals )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchDeals(dealdata.sort,dealdata.order,10,0))
   },[])

  return dealdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): dealdata.error ? (
          <h1>{dealdata.error}</h1>
            ) : (
          
              <div> 
                  <DealSearch />
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/sales/deal/list">List Deal</Button>
                  <Button className={classes.content} href="/sales/deal/create">Create Deal</Button>
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
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("id",dealdata.order==="desc"?"asc":"desc",10,0))}
                    >
                       Deal ID
                    </TableSortLabel>
                    </StyledTableCell>
                   </Hidden>  

                    <StyledTableCell key="logo">
                      <TableSortLabel
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("company",dealdata.order==="desc"?"asc":"desc",10,0))}>
                      Company
                       </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="contact">
                    <TableSortLabel
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("contact",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Contact 
                      </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only={['sm', 'xs']}>


                    <StyledTableCell key="note" >
                      <TableSortLabel
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("note",dealdata.order==="desc"?"asc":"desc",10,0))}>
                       Note 
                      </TableSortLabel>   
                    </StyledTableCell>

                    <StyledTableCell key="startDate">
                      <TableSortLabel
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("startDate",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Start Date 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="endDate" > 
                      <TableSortLabel
                      direction={dealdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchDeals("endDate",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        End Date 
                      </TableSortLabel>    
                    </StyledTableCell>

                    <StyledTableCell key="protocol" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("protocol",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Protocol
                        </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="approximatedealamount" > 
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("approximatedealamount",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Aprox. Deal Amount
                      </TableSortLabel>
                     </StyledTableCell>

                    <StyledTableCell key="dealamount" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("dealamount",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Deal Amount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="paymentmethod" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("paymentmethod",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Payment Method 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="discount" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("discount",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Discount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="iva" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("iva",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        IVA 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="total" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("total",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Total 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="user" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("user",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="dateCreated" >
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("dateCreated",dealdata.order==="desc"?"asc":"desc",10,0))}>
                       Date Created 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="lastUpdated" > 
                      <TableSortLabel
                        direction={dealdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchDeals("lastUpdated",dealdata.order==="desc"?"asc":"desc",10,0))}>
                        Last Updated
                      </TableSortLabel>
                    </StyledTableCell>

                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {dealdata.deals.map(deal =>  <StyledTableRow key={deal.id}>
           <StyledTableCell component="th" scope="row">{deal.id}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.company}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.contact}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.note}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.startDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.endDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.protocol }</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.approximatedealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.dealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.paymentmethod}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.discount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.iva}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.total}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.dateCreated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{deal.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Company">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadDeals(dealdata.sort,dealdata.order,dealdata.max,dealdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default DealList;