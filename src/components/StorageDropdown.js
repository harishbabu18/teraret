import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import StorageIcon from '@material-ui/icons/Storage';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Storage (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
        <div>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <StorageIcon /> 
          </ListItemIcon>
          <ListItemText primary="Storage" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/admin/employee/list">
              <ListItemIcon>
                <PeopleAltIcon  />
              </ListItemIcon>
              <ListItemText primary="Employee" />
            </ListItem>


            <ListItem button className={classes.nested}  component={Link} to="/admin/product/list">   
              <ListItemIcon>
              <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItem>


            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Equipment" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Machines" />
            </ListItem>
          </List>
        </Collapse>
        </div>
    );
  }