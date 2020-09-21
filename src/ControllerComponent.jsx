import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import InfoIcon from "@material-ui/icons/Info";
import StarsIcon from "@material-ui/icons/Stars";

// Importing Pages 
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Product'
import Home from './Pages/Home'
import Errors from './Pages/Errors'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      
      
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'rgba(12, 0, 50, 0.9)',
      
    },
    backgroundColor: 'rgba(12, 0, 50, 0.9)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      color: '#fff',
      
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(12, 0, 50, 0.9)',
    color: '#fff'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },

  navIcon: {
      color: '#fff'
  },
  link: {
    color: '#fff'
  }
}));

const ControllerComponent = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem className={classes.link} component={Link} to='/'>
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <HomeIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem className={classes.link} component={Link} to='/product' >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <StorefrontIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Products"}/>
        </ListItem>
        <ListItem className={classes.link}  component={Link} to='/about'>
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <InfoIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"About Us"} />
        </ListItem>
        <ListItem className={classes.link} component={Link} to='/contact'>
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <ContactMailIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Contact Us"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <LoyaltyIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Membership"} />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <SubscriptionsIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Subscribe"} />
        </ListItem>
        <ListItem
          button
          onClick={() =>
            alert("This functionality will be implemented soon...")
          }
        >
          <ListItemIcon className={classes.navIcon}>
            {" "}
            <StarsIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Favourites"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

            <Switch>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/product'>
                    <Product />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/'>
                    <Errors />
                </Route>
            </Switch>


      </main>
    </div>
  );
};
ControllerComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ControllerComponent;
