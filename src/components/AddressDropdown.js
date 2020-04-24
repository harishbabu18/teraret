import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Link } from "react-router-dom";
import BusinessIcon from '@material-ui/icons/Business';
import GroupWorkIcon from '@material-ui/icons/GroupWork';


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

export default function Address (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
        <div>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <ContactsIcon /> 
          </ListItemIcon>
          <ListItemText primary="Address" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/addressbook/company/list">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItem>


            <ListItem button className={classes.nested}  component={Link} to="/addressbook/contact/list">
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>



            <ListItem button className={classes.nested}  component={Link} to="/addressbook/employee/list">

              <ListItemIcon>
                <GroupWorkIcon  />
              </ListItemIcon>
              <ListItemText primary="Collaborator" />
            </ListItem>

            <ListItem button className={classes.nested}  component={Link} to="/addressbook/supplier/list">

<ListItemIcon>
  <GroupWorkIcon  />
</ListItemIcon>
<ListItemText primary="Supplier" />
</ListItem>
          </List>
        </Collapse>
        </div>
    );
  }