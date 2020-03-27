import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import Calendar from './../components/DropDownSide';
import Address from './../components/AddressDropdown';
import Warehouse from './../components/WarehouseDropdown';
import Sales from './../components/SalesDropdown';
import Account from'./../components/AccountDropdown';
import Storage from './../components/StorageDropdown';
import Opportunities from './../components/OpportunitiesDropdown';
import { Route ,Redirect} from 'react-router-dom';  
import { Link } from "react-router-dom";
import Auth from './../security/auth';
import logo from "../qualifica.png";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color:'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));








export default function MiniDrawer({logoutHandler,component: Component, ...rest}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);


  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Qualifica Group" />
        <div className={classes.grow} />
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <AccountCircle />
          </IconButton>
        {/* </div> */}
          
        </Toolbar>
      </AppBar>
      {renderMenu}

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
            {/* <ListItem button >
              <ListItemIcon> <DashboardIcon /> </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>     */}
            {/* <Calendar /> */}
            <Address />   
            <Warehouse />  
            <Sales />   
            <Account />   
            {/* <Storage /> */}
            {/* <ListItem button component={Link} to="/admin/ticket/list">
              <ListItemIcon> <ConfirmationNumberIcon /> </ListItemIcon>
              <ListItemText primary="Ticket" />
            </ListItem>         
            <Opportunities />
            <ListItem button >
              <ListItemIcon> <BorderColorIcon /> </ListItemIcon>
              <ListItemText primary="Contracts" />
            </ListItem>       
            <ListItem button >
              <ListItemIcon> <AddShoppingCartIcon /> </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button >
              <ListItemIcon> <AccountBalanceIcon /> </ListItemIcon>
              <ListItemText primary="Accounting" />
            </ListItem>
            <ListItem button >
              <ListItemIcon> <TimerIcon /> </ListItemIcon>
              <ListItemText primary="Time Keeping" />
            </ListItem>
            <ListItem button >
              <ListItemIcon> <SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem> */}
        </List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route {...rest} render={Component } />



      </main>
      </div>
  );
}
