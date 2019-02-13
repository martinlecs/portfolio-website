import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DrawerContext } from '../../context/DrawerContext';
import LeftSideDrawer from './Drawer/LeftSideDrawer';

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${theme.custom.drawerWidth}px)`,
    marginLeft: theme.custom.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
});

const Title = () => {
  return (
    <Typography
      variant="h3"
      color="inherit"
      component={NavLink}
      to="/"
    >
      Martin's Portfolio
    </Typography>
  );
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DrawerContext.Consumer>
          {context => (
            <React.Fragment>
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: context.state.open
                })}
              >
                <ToolBar disableGutters={!context.state.open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={context.toggleDrawer}
                    className={classNames(
                      classes.menuButton,
                      context.state.open && classes.hide
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Title/>
                </ToolBar>
              </AppBar>
            </React.Fragment>
          )}
        </DrawerContext.Consumer>
        <LeftSideDrawer/>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
