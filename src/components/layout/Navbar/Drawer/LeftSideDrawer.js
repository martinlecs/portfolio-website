import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import DrawerList from "./DrawerList";
import { DrawerContext } from "../../../../App";

const styles = theme => ({
  drawer: {
    width: theme.custom.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.custom.drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

class LeftSideDrawer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <DrawerContext.Consumer>
        {context => (
          <React.Fragment>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={context.state.open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={context.toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <DrawerList />
            </Drawer>
          </React.Fragment>
        )}
      </DrawerContext.Consumer>
    );
  }
}

export default withStyles(styles)(LeftSideDrawer);
