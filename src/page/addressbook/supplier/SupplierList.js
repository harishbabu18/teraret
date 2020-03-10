import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadSuppliers, fetchSuppliers} from '../../../redux/index';
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
    '& > * .MuiTextField-root ': {
      margin: theme.spacing(1),
      marginBottom: 12,
      margin: theme.spacing(1),


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




function SupplierList(){
  const classes = useStyles();
  const supplierdata = useSelector(state => state.supplier )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchSuppliers(supplierdata.sort,supplierdata.order,10,0))
   },[])

  return supplierdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): supplierdata.error ? (
          <h1>{supplierdata.error}</h1>
            ) : (
          
              <div> 
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/addressbook/company/list">List Supplier</Button>
                  <Button className={classes.content} href="/addressbook/company/create">Create Supplier</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                    <TableSortLabel>
                       Supplier ID
                    </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell > Supplier </StyledTableCell>
                    <StyledTableCell > VAT </StyledTableCell>
                    <StyledTableCell > PEC </StyledTableCell>
                    <StyledTableCell > E-mail </StyledTableCell>
                    <StyledTableCell > Mobile </StyledTableCell>
                    <StyledTableCell > Fax </StyledTableCell>
                    <StyledTableCell > Note </StyledTableCell>
                    <StyledTableCell > Services </StyledTableCell>
                    <StyledTableCell >Address</StyledTableCell>
                    <StyledTableCell > User </StyledTableCell>
                    <StyledTableCell > Supplier Status </StyledTableCell>
                    <StyledTableCell > Date Created</StyledTableCell>
                    <StyledTableCell > Last Updated </StyledTableCell>
                    <StyledTableCell > Action </StyledTableCell>
                    

                  </TableRow>
                </TableHead>
                <TableBody>
           {supplierdata.suppliers.map(supplier =>  <StyledTableRow key={supplier.id}>
            <StyledTableCell component="th" scope="row">{supplier.id}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.supplier}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.vat}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.pec}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.email}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.mobile}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.fax }</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.note} </StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.services}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.addresslineone} {supplier.addresslinetwo}, {supplier.state}-{supplier.zip},{supplier.coutry}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.supplierstatus}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.dateCreated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{supplier.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Supplier">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>





                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadSuppliers(supplierdata.sort,supplierdata.order,supplierdata.max,supplierdata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default SupplierList;


