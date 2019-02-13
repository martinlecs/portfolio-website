import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Home from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import NoteAdd from '@material-ui/icons/NoteAdd';
import PermIdentity from '@material-ui/icons/PermIdentity';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInDrawerList = () => {
  return (
    <List>

      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <Home/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={NavLink} to="/">
        <ListItemIcon>
          <ListIcon/>
        </ListItemIcon>
        <ListItemText primary="Project List" />
      </ListItem>

      <ListItem button component={NavLink} to="/addproject">
        <ListItemIcon>
          <NoteAdd />
        </ListItemIcon>
        <ListItemText primary="Add Project" />
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
        <ListItemText primary="Sign Out" />
      </ListItem>

    </List>
  );
};

export default SignedInDrawerList;
