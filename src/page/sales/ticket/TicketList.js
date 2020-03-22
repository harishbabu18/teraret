import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {fetchTickets, loadTickets} from '../../../redux/index';
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
    '& .MuiTextField-root ': {
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
    backgroundColor: theme.palette.secondary,
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

function TicketList(){
  const classes = useStyles();
  const ticketdata = useSelector(state => state.ticket )
  const dispatch = useDispatch()
   useEffect(() => {
       dispatch(fetchTickets(ticketdata.sort,ticketdata.order,10,0))
   },[])

  return ticketdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): ticketdata.error ? (
          <h1>{ticketdata.error}</h1>
            ) : (
          
              <div>
                
                <TicketSearch /> 

              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/sales/ticket/list">List Ticket</Button>
                  <Button className={classes.content} href="/sales/ticket/create">Create Ticket</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>

                    <Hidden only={['xs', 'sm']}>
                      <StyledTableCell key="id" >
                        <TableSortLabel
                          onClick={() => dispatch(fetchTickets("id",ticketdata.order==="desc"?"asc":"desc",10,0))}
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                        >
                          Ticket ID
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="ticket" >
                      <TableSortLabel
                        direction={ticketdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTickets("ticket",ticketdata.order==="desc"?"asc":"desc",10,0))}
                      >
                       Ticket 
                      </TableSortLabel> 
                    </StyledTableCell>

                    <Hidden only={['xs', 'sm']}>
                      <StyledTableCell key="description" >
                        <TableSortLabel
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTickets("description",ticketdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Description 
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="contact" >
                      <TableSortLabel
                        direction={ticketdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTickets("contact",ticketdata.order==="desc"?"asc":"desc",10,0))}
                      >
                       Contact 
                      </TableSortLabel> 
                    </StyledTableCell>

                    <StyledTableCell key="ticketStatus" >
                      <TableSortLabel
                        direction={ticketdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchTickets("ticketStatus",ticketdata.order==="desc"?"asc":"desc",10,0))}
                      >
                       Ticket Status 
                      </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only={['xs', 'sm']}>
                      <StyledTableCell key="ticketSource" >
                        <TableSortLabel
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTickets("ticketSource",ticketdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Ticket Source
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="user" >
                        <TableSortLabel
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTickets("user",ticketdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Created By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="assignedTo" >
                        <TableSortLabel
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTickets("assignedTo",ticketdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        AssignedTo
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" >
                        <TableSortLabel
                            direction={ticketdata.order==="desc"?"asc":"desc"}
                            onClick={() => dispatch(fetchTickets("dateCreated",ticketdata.order==="desc"?"asc":"desc",10,0))}
                          >
                        Date Created 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={ticketdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchTickets("lastUpdated",ticketdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Last Updated
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>

                <TableBody>
                  {ticketdata.tickets.map(ticket =>  <StyledTableRow key={ticket.id}>
                  <Hidden only={['xs', 'sm']}>
                    <StyledTableCell component="th" scope="row">{ticket.id}</StyledTableCell>
                  </Hidden>
                  
                  <StyledTableCell component="th" scope="row">{ticket.ticket} </StyledTableCell>
                  
                  <Hidden only={['xs', 'sm']}>
                    <StyledTableCell component="th" scope="row">{ticket.description}</StyledTableCell>
                  </Hidden>
                  <StyledTableCell component="th" scope="row">{ticket.contact}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">{ticket.ticketStatus}</StyledTableCell>
                  
                  <Hidden only={['xs', 'sm']}>
                    <StyledTableCell component="th" scope="row">{ticket.ticketSource}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{ticket.createdBy}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{ticket.assignedTo} </StyledTableCell>
                    <StyledTableCell component="th" scope="row">{ticket.dateCreated}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{ticket.lastUpdated}</StyledTableCell>
                  </Hidden>

                  <StyledTableCell component="th" scope="row">
                    <IconButton color="secondary" aria-label="Edit Ticket">
                      <EditIcon/>          
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
                )}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadTickets(ticketdata.sort,ticketdata.order,ticketdata.max,ticketdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default TicketList;


