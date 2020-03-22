import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {fetchMeans, loadMeans} from '../../../redux/index';
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
import MeanSearch from './MeansSearch';
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
    backgroundColor: theme.palette.common.default,
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

function MeanList(){
  const classes = useStyles();
  const meandata = useSelector(state => state.mean )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchMeans(meandata.sort,meandata.order,10,0))
   },[])

  return meandata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): meandata.error ? (
          <h1>{meandata.error}</h1>
            ) : (
          
              <div> 

              <MeanSearch />

              <Grid item  sm={12} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/warehouse/means/list">List Means</Button>
                  <Button className={classes.content} href="/warehouse/means/create">Create Mean</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
               <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                  <Hidden only={['sm', 'xs']}>

                    <StyledTableCell key="id" >
                      <TableSortLabel
                        direction={meandata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchMeans("id",meandata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Mean ID
                      </TableSortLabel>
                    </StyledTableCell>
                  </Hidden>

                    <StyledTableCell key="name" >
                      <TableSortLabel
                            direction={meandata.order==="desc"?"asc":"desc"}
                            onClick={() => dispatch(fetchMeans("loaing",meandata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Loading Transport
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="unloading" > 
                      <TableSortLabel
                            direction={meandata.order==="desc"?"asc":"desc"}
                            onClick={() => dispatch(fetchMeans("unloading",meandata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Unloading Transport 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="schedule" >
                      <TableSortLabel
                        direction={meandata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchMeans("schdeule",meandata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Schedule Transport 
                      </TableSortLabel>
                    </StyledTableCell>

                  <Hidden only={['sm', 'xs']}>

                    <StyledTableCell key="createdBy" >
                      <TableSortLabel
                        direction={meandata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchMeans("user",meandata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Created By 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="dateCreated" > 
                      <TableSortLabel
                        direction={meandata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchMeans("dateCreated",meandata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Date Created 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="lastUpdated" > 
                      <TableSortLabel
                        direction={meandata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchMeans("lastUpdated",meandata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Last Updated 
                      </TableSortLabel> 
                    </StyledTableCell>
                  </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {meandata.means.map(mean =>  
           <StyledTableRow key={mean.id}>
            <Hidden only={['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{mean.id}</StyledTableCell>
            </Hidden>
            <StyledTableCell component="th" scope="row">{mean.loading}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{mean.unloading}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{mean.schedule}</StyledTableCell>

            <Hidden only={['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{mean.user}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{mean.dateCreated}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{mean.lastUpdated}</StyledTableCell>
            </Hidden>

            <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Contact">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

           </StyledTableRow>)}
          </TableBody>
        </Table>
          <Button onClick={() => dispatch(loadMeans(meandata.sort,meandata.order,meandata.max,meandata.offset))}>Load More</Button>
        </TableContainer>
      </Grid>
    </div>
         
      )   
}

export default MeanList;


