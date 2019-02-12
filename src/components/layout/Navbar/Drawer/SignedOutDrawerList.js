import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListIcon from "@material-ui/icons/List";
import Home from "@material-ui/icons/Home";
import PermIdentity from "@material-ui/icons/PermIdentity";
import { NavLink } from "react-router-dom";
import SignIn from "../../../auth/SignIn";

const SignedOutDrawerList = () => {
  return (
    <List>
      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Project List" />
      </ListItem>

      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <PermIdentity />
        </ListItemIcon>
        <ListItemText primary="About Me" />
      </ListItem>

      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
    </List>
  );
};

export default SignedOutDrawerList;
