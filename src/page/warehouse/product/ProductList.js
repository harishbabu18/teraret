import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, makeStyles,withStyles } from '@material-ui/core';
import { ButtonGroup} from '@material-ui/core';
import {loadProducts, fetchProducts} from '../../../redux/index';
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
import ProductSearch from './ProductSearch';
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

function ProductList(){
  const classes = useStyles();
  const productdata = useSelector(state => state.product )

  const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchProducts(productdata.sort,productdata.order,10,0))
   },[])

  return productdata.loading ?(
            <div className={classes.root}>
            <LinearProgress />
          </div>
          ): productdata.error ? (
          <h1>{productdata.error}</h1>
            ) : (
          
            <div> 
              <ProductSearch />
              <Grid item  sm={6} md={12} className={classes.root} >
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                  <Button className={classes.content} href="/warehouse/product/list">List Product</Button>
                  <Button className={classes.content} href="/warehouse/product/create">Create Product</Button>
                </ButtonGroup>
              </Grid>
              
              <Grid item  sm={12} md={12} className={classes.content} >
              <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="customized table">
          
                <TableHead>
                  <TableRow>
                    <Hidden only={['sm', 'xs']}>
                      <StyledTableCell key = 'id' >
                      <TableSortLabel
                        direction={productdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchProducts("id",productdata.order==="desc"?"asc":"desc",10,0))}
                      >
                        Product ID
                      </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="name">
                    <TableSortLabel
                      direction={productdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchProducts("name",productdata.order==="desc"?"asc":"desc",10,0))}>
                        Name 
                      </TableSortLabel>
                    </StyledTableCell>

                    <Hidden only={['sm', 'xs']}>

                      <StyledTableCell key="barcode">
                        <TableSortLabel
                        direction={productdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchProducts("barcode",productdata.order==="desc"?"asc":"desc",10,0))}>
                          Barcode 
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell key="price" >
                      <TableSortLabel
                      direction={productdata.order==="desc"?"asc":"desc"}
                      onClick={() => dispatch(fetchProducts("price",productdata.order==="desc"?"asc":"desc",10,0))}>
                       Price 
                      </TableSortLabel>   
                    </StyledTableCell>

                    <Hidden only={['sm', 'xs']}>

                      <StyledTableCell key="quantity" > 
                        <TableSortLabel
                        direction={productdata.order==="desc"?"asc":"desc"}
                        onClick={() => dispatch(fetchProducts("quantity",productdata.order==="desc"?"asc":"desc",10,0))}>
                          Quantity 
                        </TableSortLabel>    
                      </StyledTableCell>

                      <StyledTableCell key="number" >
                        <TableSortLabel
                          direction={productdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchProducts("number",productdata.order==="desc"?"asc":"desc",10,0))}>
                          Number Of Items
                          </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="createdBy" >
                        <TableSortLabel
                          direction={productdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchProducts("user",productdata.order==="desc"?"asc":"desc",10,0))}>
                        Created By 
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="dateCreated" >
                        <TableSortLabel
                          direction={productdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchProducts("dateCreated",productdata.order==="desc"?"asc":"desc",10,0))}>
                              Date Created
                        </TableSortLabel>
                      </StyledTableCell>

                      <StyledTableCell key="lastUpdated" > 
                        <TableSortLabel
                          direction={productdata.order==="desc"?"asc":"desc"}
                          onClick={() => dispatch(fetchProducts("lastUpdated",productdata.order==="desc"?"asc":"desc",10,0))}>
                          Last Updated
                        </TableSortLabel>
                      </StyledTableCell>
                    </Hidden>

                    <StyledTableCell > Edit </StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
           {productdata.products.map(product =>  <StyledTableRow key={product.id}>
            
            <Hidden only={['sm', 'xs']}>
              <StyledTableCell component="th" scope="row">{product.id}</StyledTableCell>
            </Hidden>

           <StyledTableCell component="th" scope="row">{product.name}</StyledTableCell>
           
           <Hidden only={['sm', 'xs']}>
             <StyledTableCell component="th" scope="row">{product.barcode}</StyledTableCell>
           </Hidden>
           
           <StyledTableCell component="th" scope="row">{product.price}</StyledTableCell>
           
           <Hidden only={['sm', 'xs']}>
            <StyledTableCell component="th" scope="row">{product.quantity} {product.quantityType}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{product.number}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{product.createdBy}</StyledTableCell>
            <StyledTableCell component="th" scope="row">{product.dateCreated }</StyledTableCell>
            <StyledTableCell component="th" scope="row">{product.lastUpdated}</StyledTableCell>
           </Hidden>

           <StyledTableCell component="th" scope="row">
            <IconButton color="secondary" aria-label="Edit Product">
              <EditIcon/>          
            </IconButton>
          </StyledTableCell>

                </StyledTableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={() => dispatch(loadProducts(productdata.sort,productdata.order,productdata.max,productdata.offset))}>Load More</Button>
        </TableContainer>

    </Grid>
  </div>
          
          
      )
    
}

export default ProductList;


