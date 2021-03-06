
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadRents, fetchRents} from '../../../redux/index';
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
import RentSearch from './RentSearch';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles( theme => ({
  root: {
    '& > * + * .MuiTextField-root ': {
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
    backgroundColor: theme.palette.common.default,
    color: theme.palette.common.black,
    size: 'small'
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

function RentList(){
  const classes = useStyles();
  const rentdata = useSelector(state => state.rent )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchRents(rentdata.sort,rentdata.order,10,0))
   },[])

  return rentdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): rentdata.error ? (
          <h1>{rentdata.error}</h1>
            ) : (
          
            <div> 

               <RentSearch/>
              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/account/rent/list">List Rent</Button>
                  <Button className={classes.content} href="/account/rent/create">Create Rent</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                      <StyledTableCell key = 'id' >
                      <TableSortLabel
                        direction={rentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchRents("id",rentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Rent ID
                      </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="name">
                      <TableSortLabel
                      direction={rentdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchRents("name",rentdata.order==="desc"?"asc":"desc",10,0))}>
                       Name
                       </TableSortLabel>
                    </StyledTableCell>


                      <StyledTableCell key="amount">
                      <TableSortLabel
                        direction={rentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchRents("amount",rentdata.order==="desc"?"asc":"desc",10,0))}>
                          Amount
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="note">
                        <TableSortLabel
                        direction={rentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchRents("note",rentdata.order==="desc"?"asc":"desc",10,0))}>
                          Note 
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="expensedate" >
                      <TableSortLabel
                      direction={rentdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchRents("expensedate",rentdata.order==="desc"?"asc":"desc",10,0))}>
                       Expense Date 
                      </TableSortLabel>   
                    </StyledTableCell>

                      <StyledTableCell key="createdBy" >
                        <TableSortLabel
                          direction={rentdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchRents("user",rentdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" > 
                        <TableSortLabel
                          direction={rentdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchRents("dateCreated",rentdata.order==="desc"?"asc":"desc",10,0))}>
                          Date Created
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={rentdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchRents("lastUpdated",rentdata.order==="desc"?"asc":"desc",10,0))}>
                          Last Updated
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {rentdata.rents.map(rent =>  <StyledTableRow key={rent.id}>
              <StyledTableCell component="th" scope="row">{rent.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{rent.name}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{rent.note}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{rent.expensedate}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{rent.user}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{rent.dateCreated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{rent.lastUpdated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <IconButton color="secondary" aria-label="Edit Supplier">
                  <EditIcon/>          
                </IconButton>
              </StyledTableCell>

                </StyledTableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadRents(rentdata.sort,rentdata.order,rentdata.max,rentdata.offset))}>Load More</Button>
        </TableContainer>

    </Grid>
  </div>
          
          
      )
    
}

export default RentList;


