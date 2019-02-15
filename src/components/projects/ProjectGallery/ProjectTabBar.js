import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  grid: {
    // paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
});

class ProjectTabBar extends Component {
  render() {
    const { classes, handleTabChange, tabValue } = this.props;
    return (
      <React.Fragment>
        <Grid className={classes.grid} item>
          <Paper square>
            <Tabs
              value={tabValue}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleTabChange}
            >
              <Tab label="All" />
              <Tab label="Apps" />
              <Tab label="UI Designs" />
              <Tab label="Games" />
            </Tabs>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProjectTabBar);
