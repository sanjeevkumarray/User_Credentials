import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Dashboard as DashboardIcon, Settings as SettingsIcon, ViewList as ProductsIcon } from "@material-ui/icons";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

// Define styles using Material UI's makeStyles function
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  // Array of menu items to be displayed in the sidebar
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: `${path}` },
    { text: "Products", icon: <ProductsIcon />, path: `${path}/products` },
    { text: "Settings", icon: <SettingsIcon />, path: `${path}/settings` },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          {/* Define routes for each menu item */}
          <Route exact path={path}>
            <Typography variant="h4">Dashboard</Typography>
          </Route>
          <Route path={`${path}/products`}>
            <Typography variant="h4">Products</Typography>
          </Route>
          <Route path={`${path}/settings`}>
            <Typography variant="h4">Settings</Typography>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;
