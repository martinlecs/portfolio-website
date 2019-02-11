import React, { Component } from "react";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { DrawerContext } from "../../App";

const styles = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: theme.spacing.unit
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.custom.drawerWidth,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DrawerContext.Consumer>
        {(context) => (
          <React.Fragment>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: context.state.open
              })}
            >
              <div className={classes.drawerHeader} />
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
                rutrum quisque non tellus. Convallis convallis tellus id interdum
                velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
                sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
              </Typography>
            </main>
          </React.Fragment>
        )}
      </DrawerContext.Consumer>
    );
  }
}

export default withStyles(styles)(Main);
