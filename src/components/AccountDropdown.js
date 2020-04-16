import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import TrendingDownIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';



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

export default function Account (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
        <div>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <TrendingDownIcon /> 
          </ListItemIcon>
          <ListItemText primary="Account" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested} component={Link} to="/account/rent/list">
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Rent" />
            </ListItem>


            <ListItem button className={classes.nested}  component={Link} to="/account/salary/list">
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Salary" />
            </ListItem>



            <ListItem button className={classes.nested}  component={Link} to="/account/ticket/list">

              <ListItemIcon>
                <LocalOfferIcon  />
              </ListItemIcon>
              <ListItemText primary="Ticket" />
            </ListItem>

          </List>
        </Collapse>
        </div>
    );
  }