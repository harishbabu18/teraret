import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {fetchEquipments, loadEquipments} from '../../../redux/index';
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

function EquipmentList(){
  const classes = useStyles();
  const equipmentdata = useSelector(state => state.equipment )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchEquipments(equipmentdata.sort,equipmentdata.order,10,0))
   },[])

  return equipmentdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): equipmentdata.error ? (
          <h1>{equipmentdata.error}</h1>
            ) : (
          
              <div> 
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/warehouse/equipment/list">List Equipments</Button>
                  <Button className={classes.content} href="/warehouse/equipment/create">Create Equipment</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
               <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <StyledTableCell key="id" >
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("id",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Equipment ID
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="name" >
                      <TableSortLabel
                            direction={equipmentdata.order==="desc"?"asc":"desc"}
                            onClick={() => dispatch(fetchEquipments("name",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Name 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="description" > 
                      <TableSortLabel
                            direction={equipmentdata.order==="desc"?"asc":"desc"}
                            onClick={() => dispatch(fetchEquipments("description",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Description 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="serial" >
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("serial",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Serial Number 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="type" >
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("type",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Type 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="supplier" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("supplier",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Supplier 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="salesPrice" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("salesPrice",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Sales Price 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="purchasePrice" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("purchasePrice",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Purchase Price 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="user" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("user",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                          Craeted By
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="dateCreated" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("dateCreated",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Date Created 
                      </TableSortLabel>
                    </StyledTableCell>

                    <StyledTableCell key="lastUpdated" > 
                      <TableSortLabel
                        direction={equipmentdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchEquipments("lastUpdated",equipmentdata.order==="desc"?"asc":"desc",10,0))}
                        >
                        Last Updated 
                      </TableSortLabel> 
                    </StyledTableCell>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {equipmentdata.equipments.map(equipment =>  
           <StyledTableRow key={equipment.id}>
               
            <StyledTableCell component="th" scope="row">{equipment.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.name} </StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.description}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.serial}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.type}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.supplier}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.salesPrice}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.purchasePrice}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.user}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.dateCreated}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{equipment.lastUpdated}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Contact">
              <EditIcon/>          
            </IconButton>
           </StyledTableCell>

           </StyledTableRow>)}
          </TableBody>
        </Table>
          <Button onClick={() => dispatch(loadEquipments(equipmentdata.sort,equipmentdata.order,equipmentdata.max,equipmentdata.offset))}>Load More</Button>
        </TableContainer>
      </Grid>
    </div>
         
      )   
}

export default EquipmentList;


