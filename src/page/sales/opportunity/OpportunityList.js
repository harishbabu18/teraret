import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadOpportunities,fetchOpportunities} from '../../../redux/index';
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
import OpportunitySearch from './OpportunitySearch';
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




function OpportunityList(){
  const classes = useStyles();
  const opportunitiesdata = useSelector(state => state.opportunities )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchOpportunities(opportunitiesdata.sort,opportunitiesdata.order,10,0))
   },[])

  return opportunitiesdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): opportunitiesdata.error ? (
          <h1>{opportunitiesdata.error}</h1>
            ) : (
          
              <div> 
                  <OpportunitySearch />
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/sales/opportunity/list">List Opportunity</Button>
                  <Button className={classes.content} href="/sales/opportunity/create">Create Opportunity</Button>
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
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("id",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}
                    >
                       Opportunity ID
                    </TableSortLabel>
                    </StyledTableCell>
                   </Hidden>  

                    <StyledTableCell key="logo">
                      <TableSortLabel
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("company",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                      Company
                       </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="contact">
                    <TableSortLabel
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("contact",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Contact 
                      </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only={['sm', 'xs']}>


                    <StyledTableCell key="note" >
                      <TableSortLabel
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("note",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                       Note 
                      </TableSortLabel>   
                    </StyledTableCell>

                    <StyledTableCell key="startDate">
                      <TableSortLabel
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("startDate",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Start Date 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="endDate" > 
                      <TableSortLabel
                      direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchOpportunities("endDate",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        End Date 
                      </TableSortLabel>    
                    </StyledTableCell>

                    <StyledTableCell key="protocol" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("protocol",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Protocol
                        </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="approximatedealamount" > 
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("approximatedealamount",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Aprox. Deal Amount
                      </TableSortLabel>
                     </StyledTableCell>

                    <StyledTableCell key="dealamount" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("dealamount",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Deal Amount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="paymentmethod" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("paymentmethod",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Payment Method 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="discount" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("discount",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Discount 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="iva" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("iva",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        IVA 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="total" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("total",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Total 
                      </TableSortLabel>
                    </StyledTableCell>


                    <StyledTableCell key="user" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("user",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="dateCreated" >
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("dateCreated",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                       Date Created 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="lastUpdated" > 
                      <TableSortLabel
                        direction={opportunitiesdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchOpportunities("lastUpdated",opportunitiesdata.order==="desc"?"asc":"desc",10,0))}>
                        Last Updated
                      </TableSortLabel>
                    </StyledTableCell>

                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {opportunitiesdata.opportunities.map(opportunities =>  <StyledTableRow key={opportunities.id}>
           <StyledTableCell component="th" scope="row">{opportunities.id}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.company}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.contact}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.note}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.startDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.endDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.protocol }</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.approximatedealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.dealamount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.paymentmethod}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.discount}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.iva}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.total}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.dateCreated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{opportunities.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Opportunity">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadOpportunities(opportunitiesdata.sort,opportunitiesdata.order,opportunitiesdata.max,opportunitiesdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default OpportunityList;