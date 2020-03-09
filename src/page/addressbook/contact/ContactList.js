import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {fetchContacts, loadContacts} from '../../../redux/index';
import { useSelector,useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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




function ContactList(){
  const classes = useStyles();
  const contactdata = useSelector(state => state.contact )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchContacts(contactdata.sort,contactdata.order,10,0))
   },[])

  return contactdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): contactdata.error ? (
          <h1>{contactdata.error}</h1>
            ) : (
          
              <div> 
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/addressbook/contact/list">List Contact</Button>
                  <Button className={classes.content} href="/addressbook/contact/create">Create Contact</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                    <TableSortLabel>
                       Contact ID
                    </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell > Profile Pic </StyledTableCell>
                    <StyledTableCell > Name </StyledTableCell>
                    <StyledTableCell > Position </StyledTableCell>
                    <StyledTableCell > Date Of Birth </StyledTableCell>
                    <StyledTableCell > Mobile </StyledTableCell>
                    <StyledTableCell > E-mail </StyledTableCell>
                    <StyledTableCell > Address </StyledTableCell>
                    <StyledTableCell > Created By </StyledTableCell>
                    <StyledTableCell > Date Created </StyledTableCell>
                    <StyledTableCell > Last Updated </StyledTableCell>
                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>

                <TableBody>
           {contactdata.contacts.map(contact =>  <StyledTableRow key={contact.id}>
            <StyledTableCell component="th" scope="row">{contact.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">

            <IconButton color="secondary" aria-label="Edit Contact">
              <Avatar alt={contact.firstName} src={(contact.avatar)?contact.avatar:contact.firstName} />
            </IconButton>
           </StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.firstName} {contact.lastName}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.position.name}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.dob}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.mobile}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.email}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.addresslineone} {contact.addresslinetwo}, {contact.state}-{contact.zip}, {contact.country} </StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.dateCreated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{contact.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Contact">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>




                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadContacts(contactdata.sort,contactdata.order,contactdata.max,contactdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default ContactList;

