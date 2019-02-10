import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.grow}>
            Martin's Portfolio
          </Typography>
          <Button color="inherit">Login</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
