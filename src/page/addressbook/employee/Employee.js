import React from 'react';
import {SERVER_URL} from '../config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ButtonGroup} from '@material-ui/core';

const useStyles = theme => ({
  root: {
    '& .MuiTextField-root ': {
      margin: theme.spacing(1),
      marginBottom: 12,

    [theme.breakpoints.down('sm')]: {
        width: '100%',
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(1,0),
  },



});

class Employee extends React.Component {
    constructor() {
        super();

      this.state = {
        offset:0,
        max:10,
        employee: [],
        filterList:[],
        searchTicketValue:'',
        
      }

    }
    componentDidMount() {
     this.loadEmployees()
    }
    loadEmployees = () => {
      const {offset,max,employee} = this.state
     const url = SERVER_URL+'/employee?offset='+offset+'&max='+max
      fetch(url)
      .then(r => r.json())
      .then(json => this.setState({employee:[...employee,...json] }))
      .catch(error => console.error('Error retrieving Companies: ' + error));
    }

    loadMore=()=>{
      this.setState(prevState =>({
        offset:prevState.offset+10
      }),this.loadEmployees)     
    }


    render() {
        const { classes } = this.props;
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
          
          
          

          function renderEmployeeRow(Employee) {

            return (<StyledTableRow key={Employee.id}>
              <StyledTableCell component="th" scope="row">
                {Employee.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{Employee.lastName}</StyledTableCell>
              <StyledTableCell align="right">{Employee.email}</StyledTableCell>
              <StyledTableCell align="right">{Employee.dob}</StyledTableCell>
              <StyledTableCell align="right">{Employee.joinindate}</StyledTableCell>
            </StyledTableRow>);
          }
      

        return(
          <div>
          <Grid item  sm={6} md={12} className={classes.root} >

          <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button href="/addressbook/employee/list">List employee</Button>
          <Button href="/addressbook/employee/create">Create employee</Button>
          
        </ButtonGroup>
        </Grid>

        <Grid item  sm={12} md={12} className={classes.content} >

              
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email Id</StyledTableCell>
            <StyledTableCell align="right">Date Of Birth </StyledTableCell>
            <StyledTableCell align="right">Joining Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.employee.map(renderEmployeeRow)}
        </TableBody>
        <Button onClick={this.loadMore}>Load More</Button>
      </Table>
    </Grid>
    </div>
        );
    }
}

export default  withStyles(useStyles)(Employee);