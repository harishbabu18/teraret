
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
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import SupplierSearch from './SupplierSearch';
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

               <SupplierSearch/>
              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/addressbook/supplier/list">List Supplier</Button>
                  <Button className={classes.content} href="/addressbook/supplier/create">Create Supplier</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <Hidden only = {['sm', 'xs']}>
                      <StyledTableCell key = 'id' >
                      <TableSortLabel
                        direction={supplierdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSuppliers("id",supplierdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Supplier ID
                      </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="name">
                      <TableSortLabel
                      direction={supplierdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchSuppliers("name",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                       Name
                       </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only = {['sm', 'xs']}>

                      <StyledTableCell key="vat">
                      <TableSortLabel
                        direction={supplierdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSuppliers("vat",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          VAT
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="pec">
                        <TableSortLabel
                        direction={supplierdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSuppliers("pec",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          PEC 
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="email" >
                      <TableSortLabel
                      direction={supplierdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchSuppliers("email",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                       E-mail 
                      </TableSortLabel>   
                    </StyledTableCell>
                    <Hidden only = {['sm', 'xs']}>

                      <StyledTableCell key="mobile" > 
                        <TableSortLabel
                        direction={supplierdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSuppliers("mobile",supplierdata.order==="desc"?"asc":"desc",10,0))}>

                          Mobile 
                        </TableSortLabel>    
                      </StyledTableCell>

                      <StyledTableCell key="fax" >
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("fax",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Fax 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="note" > 
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("note",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Note
                        </TableSortLabel>
                      </StyledTableCell>
                      <StyledTableCell key="services" > 
                      
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("services",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Services
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="address" > 
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("addresslineone",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Address
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="createdBy" >
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("user",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="supplierstatus" >
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("supplierstatus",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                        Supplier Status
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" > 
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("dateCreated",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Date Created
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={supplierdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSuppliers("lastUpdated",supplierdata.order==="desc"?"asc":"desc",10,0))}>
                          Last Updated
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {supplierdata.suppliers.map(supplier =>  <StyledTableRow key={supplier.id}>
            <Hidden only = {['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{supplier.id}</StyledTableCell>
            </Hidden>
            <StyledTableCell component="th" scope="row">{supplier.name}</StyledTableCell>

            <Hidden only = {['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{supplier.vat}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.pec}</StyledTableCell>
            </Hidden>
            <StyledTableCell component="th" scope="row">{supplier.email}</StyledTableCell>

            <Hidden only = {['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{supplier.mobile}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.fax }</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.note}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.services }</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.addresslineone} {supplier.addresslinetwo}, {supplier.state}-{supplier.zip}, {supplier.country} </StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.user}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.supplierstatus}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.dateCreated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{supplier.lastUpdated}</StyledTableCell>
            </Hidden>
              <StyledTableCell component="th" scope="row">
                <IconButton color="secondary" aria-label="Edit Supplier">
                  <EditIcon/>          
                </IconButton>
              </StyledTableCell>

                </StyledTableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadSuppliers(supplierdata.sort,supplierdata.order,supplierdata.max,supplierdata.offset))}>Load More</Button>
        </TableContainer>

    </Grid>
  </div>
          
          
      )
    
}

export default SupplierList;


