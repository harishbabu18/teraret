
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadTicketss, fetchTicketss} from '../../../redux/index';
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
import TicketSearch from './TicketSearch';
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

function TicketsList(){
  const classes = useStyles();
  const ticketsdata = useSelector(state => state.tickets )
  console.log('inside tickets',ticketsdata)

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchTicketss(ticketsdata.sort,ticketsdata.order,10,0))
   },[])

  return ticketsdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): ticketsdata.error ? (
          <h1>{ticketsdata.error}</h1>
            ) : (
          
            <div> 

               <TicketSearch/>
              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/account/ticket/list">List Ticket</Button>
                  <Button className={classes.content} href="/account/ticket/create">Create Ticket</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                      <StyledTableCell key = 'id' >
                      <TableSortLabel
                        direction={ticketsdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTicketss("id", ticketsdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Ticket ID
                      </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="name">
                      <TableSortLabel
                      direction={ticketsdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchTicketss("name", ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                       Name
                       </TableSortLabel>
                    </StyledTableCell>

                      <StyledTableCell key="expenseType">
                      <TableSortLabel
                        direction={ticketsdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTicketss("expenseType",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Expense Type
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="amount">
                        <TableSortLabel
                        direction={ticketsdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTicketss("amount",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Amount 
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="note" >
                      <TableSortLabel
                      direction={ticketsdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchTicketss("note",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                       Note 
                      </TableSortLabel>   
                    </StyledTableCell>

                      <StyledTableCell key="expensedate" > 
                        <TableSortLabel
                        direction={ticketsdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTicketss("expensedate",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Expense Date 
                        </TableSortLabel>    
                      </StyledTableCell>

                      <StyledTableCell key="spendBy" >
                        <TableSortLabel
                          direction={ticketsdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTicketss("spendBy",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Spend By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="user" > 
                        <TableSortLabel
                          direction={ticketsdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTicketss("user",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          User
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" > 
                        <TableSortLabel
                          direction={ticketsdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTicketss("dateCreated",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Date Created
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={ticketsdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTicketss("lastUpdated",ticketsdata.order==="desc"?"asc":"desc",10,0))}>
                          Last Updated
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {ticketsdata.ticketss.map(ticket =>  <StyledTableRow key={ticket.id}>
              <StyledTableCell component="th" scope="row">{ticket.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{ticket.name}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{ticket.expenseType}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{ticket.amount}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{ticket.note}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{ticket.expensedate}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{ticket.spendBy }</StyledTableCell>
              <StyledTableCell component="th" scope="row">{ticket.user}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{ticket.dateCreated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{ticket.lastUpdated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <IconButton color="secondary" aria-label="Edit Ticket">
                  <EditIcon/>          
                </IconButton>
              </StyledTableCell>

                </StyledTableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadTicketss(ticketsdata.sort,ticketsdata.order,ticketsdata.max,ticketsdata.offset))}>Load More</Button>
        </TableContainer>

    </Grid>
  </div>
          
          
      )
    
}

export default TicketsList;


