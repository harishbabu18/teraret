
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadSalaries, fetchSalaries} from '../../../redux/index';
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
import SalarySearch from './SalarySearch';
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
function SalaryList(){
  const classes = useStyles();
  const salarydata = useSelector(state => state.salary )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchSalaries(salarydata.sort,salarydata.order,10,0))
   },[])

  return salarydata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): salarydata.error ? (
          <h1>{salarydata.error}</h1>
            ) : (
          
            <div> 

               <SalarySearch/>
              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/account/salary/list">List Salary</Button>
                  <Button className={classes.content} href="/account/salary/create">Create Salary</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                      <StyledTableCell key = 'id' >
                      <TableSortLabel
                        direction={salarydata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSalaries("id",salarydata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Salary ID
                      </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="name">
                      <TableSortLabel
                      direction={salarydata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchSalaries("name",salarydata.order==="desc"?"asc":"desc",10,0))}>
                       Name
                       </TableSortLabel>
                    </StyledTableCell>


                      <StyledTableCell key="amount">
                      <TableSortLabel
                        direction={salarydata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSalaries("amount",salarydata.order==="desc"?"asc":"desc",10,0))}>
                          Amount
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="note">
                        <TableSortLabel
                        direction={salarydata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSalaries("note",salarydata.order==="desc"?"asc":"desc",10,0))}>
                          Note 
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell key="expensedate" >
                      <TableSortLabel
                      direction={salarydata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchSalaries("expensedate",salarydata.order==="desc"?"asc":"desc",10,0))}>
                       Expense Date 
                      </TableSortLabel>   
                    </StyledTableCell>

                      <StyledTableCell key="employee" > 
                        <TableSortLabel
                        direction={salarydata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchSalaries("employee",salarydata.order==="desc"?"asc":"desc",10,0))}>
                          Employee 
                        </TableSortLabel>    
                      </StyledTableCell>

                      <StyledTableCell key="user" >
                        <TableSortLabel
                          direction={salarydata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSalaries("user",salarydata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" > 
                        <TableSortLabel
                          direction={salarydata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSalaries("dateCreated",salarydata.order==="desc"?"asc":"desc",10,0))}>
                          Date Created
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={salarydata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchSalaries("lastUpdated",salarydata.order==="desc"?"asc":"desc",10,0))}>
                          Last Updated
                        </TableSortLabel>
                      </StyledTableCell>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {salarydata.salaries.map(salary =>  <StyledTableRow key={salary.id}>
              <StyledTableCell component="th" scope="row">{salary.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{salary.name}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{salary.amount}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{salary.note}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{salary.expensedate}</StyledTableCell>

              <StyledTableCell component="th" scope="row">{salary.employee}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{salary.user}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{salary.dateCreated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{salary.lastUpdated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <IconButton color="secondary" aria-label="Edit Supplier">
                  <EditIcon/>          
                </IconButton>
              </StyledTableCell>

                </StyledTableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadSalaries(salarydata.sort,salarydata.order,salarydata.max,salarydata.offset))}>Load More</Button>
        </TableContainer>

    </Grid>
  </div>
          
          
      )
    
}

export default SalaryList;


