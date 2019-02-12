import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { DrawerContext } from "../../App";

const styles = theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: theme.spacing.unit
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: theme.custom.drawerWidth
  }
});

//TODO: HOC adds content shift functionality to component
function withContentShift(WrappedComponent) {
  return;
}

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <DrawerContext.Consumer>
        {context => (
          <React.Fragment>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: context.state.open
              })}
            >
              <div className={classes.drawerHeader} />
              {this.props.children}
            </main>
          </React.Fragment>
        )}
      </DrawerContext.Consumer>
    );
  }
}

export default withStyles(styles)(Main);
