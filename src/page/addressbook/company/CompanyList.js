import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadCompanys, fetchCompanys} from '../../../redux/index';
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




function CompanyList(){
  const classes = useStyles();
  const companydata = useSelector(state => state.company )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchCompanys(companydata.sort,companydata.order,10,0))
   },[])

  return companydata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): companydata.error ? (
          <h1>{companydata.error}</h1>
            ) : (
          
              <div> 
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/addressbook/company/list">List Company</Button>
                  <Button className={classes.content} href="/addressbook/company/create">Create Company</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                    <TableSortLabel>
                       Company ID
                    </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell > Logo </StyledTableCell>
                    <StyledTableCell > Name </StyledTableCell>
                    <StyledTableCell > Description </StyledTableCell>
                    <StyledTableCell > E-mail </StyledTableCell>
                    <StyledTableCell > Mobile </StyledTableCell>
                    <StyledTableCell > Website </StyledTableCell>
                    <StyledTableCell > Fax </StyledTableCell>
                    <StyledTableCell > Address </StyledTableCell>
                    <StyledTableCell > Created By </StyledTableCell>
                    <StyledTableCell > Established Date </StyledTableCell>
                    <StyledTableCell > Last Updated </StyledTableCell>
                    <StyledTableCell > Edit </StyledTableCell>

                    

                  </TableRow>
                </TableHead>
                <TableBody>
           {companydata.companys.map(company =>  <StyledTableRow key={company.id}>
            <StyledTableCell component="th" scope="row">{company.id}</StyledTableCell>

           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Contact">
              <Avatar alt={company.name} src={(company.avatar)?company.avatar:company.name} />
            </IconButton>
           </StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.name}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.description}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.email}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.mobile}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.website}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.fax }</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.addresslineone} {company.addresslinetwo}, {company.state}-{company.zip}, {company.country} </StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.user}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.establishedDate}</StyledTableCell>
           <StyledTableCell component="th" scope="row">{company.lastUpdated}</StyledTableCell>
           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Company">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>





                </StyledTableRow>)}
                </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadCompanys(companydata.sort,companydata.order,companydata.max,companydata.offset))}>Load More</Button>
          </TableContainer>
          </Grid>
          </div>
          
          
      )
    
}

export default CompanyList;


