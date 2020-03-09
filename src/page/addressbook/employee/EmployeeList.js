import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {fetchEmployees} from '../../../redux/index';
import { useSelector,useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';


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

function EmployeeList(){
  const classes = useStyles();
  const employeedata = useSelector(state => state.employee )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchEmployees(employeedata.sort,employeedata.order,10,0))
   },[])

  return employeedata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): employeedata.error ? (
          <h1>{employeedata.error}</h1>
            ) : (
          
              <div> 
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/addressbook/employee/list">List Employees</Button>
                  <Button className={classes.content} href="/addressbook/employee/create">Create Employee</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
               <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <StyledTableCell >
                    <TableSortLabel>
                       Employee ID
                    </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell > Avatar </StyledTableCell>
                    <StyledTableCell > Name </StyledTableCell>
                    <StyledTableCell > E-mail </StyledTableCell>
                    <StyledTableCell > Date Of Birth </StyledTableCell>
                    <StyledTableCell > Created By </StyledTableCell>
                    <StyledTableCell > Joining Date </StyledTableCell>
                    <StyledTableCell > Relieving Date </StyledTableCell>
                    <StyledTableCell > Date Created </StyledTableCell>
                    <StyledTableCell > Last Updated </StyledTableCell>
                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {employeedata.employees.map(employee =>  
           <StyledTableRow key={employee.id}>
            <StyledTableCell component="th" scope="row">{employee.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
              <IconButton color="secondary" aria-label="Edit Contact">
                <Avatar alt={employee.firstName} src={(employee.avatar)?employee.avatar:employee.firstName} />
              </IconButton>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.firstName} {employee.lastName}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.email}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.dob}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.user}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.joiningdate}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.relievingdate}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.dateCreated}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{employee.lastUpdated}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Contact">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

           </StyledTableRow>)}
          </TableBody>
        </Table>
          <Button onClick={() => dispatch(fetchEmployees(employeedata.sort,employeedata.order,employeedata.max,employeedata.offset))}>Load More</Button>
        </TableContainer>
      </Grid>
    </div>
         
      )   
}

export default EmployeeList;


