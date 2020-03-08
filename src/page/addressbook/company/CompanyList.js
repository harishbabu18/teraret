import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import {SERVER_URL} from '../../../config';
import { Button } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = theme => ({
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



});
class CompanyList extends React.Component {
    constructor() {
        super();
    
        this.state = {
          offset:0,
          max:10,
          company: [],
          filterList:[],
          searchTicketValue:'',
          
        }
     

      }
      componentDidMount() {
       this.loadCompany()
      }
      loadCompany= () => {
        const {offset,max,company} = this.state
       const url = SERVER_URL+'/company?offset='+offset+'&max='+max
      
        fetch(url)
        .then(r => r.json())
        .then(json => this.setState({company:[...company,...json] }))
        .catch(error => console.error('Error retrieving Companies: ' + error));
      }

      loadMore=()=>{
        this.setState(prevState =>({
          offset:prevState.offset+10
        }),this.loadCompany)     
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
          
          
          

          function renderCompanyRow(Company) {

            return (<StyledTableRow key={Company.id}>
              <StyledTableCell component="th" scope="row">
              {/* <a href="/admin/company/list"> {Company.name} </a> */}
            <Link to='/admin/companydetail'> {Company.name} </Link>
              <Button ></Button>
              </StyledTableCell>
            </StyledTableRow>);
          }
      

        return(
          <div> 
          <Grid item  sm={12} md={12} className={classes.root} >
          <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button className={classes.content} href="/addressbook/company/list">List Company</Button>
          <Button className={classes.content} href="/addressbook/company/create">Create Company</Button>
          </ButtonGroup>
           </Grid>
<Grid item  sm={12} md={12} className={classes.content} >
  <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell > name </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.company.map(renderCompanyRow)}
        </TableBody>
      </Table>
      <Button onClick={this.loadMore}>Load More</Button>
    </Grid>

    </div>
        );
    }
}

export default  withStyles(useStyles)(CompanyList);