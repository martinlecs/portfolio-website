import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProjectDetails from "../projects/ProjectDetails";
import ProjectGallery from '../projects/ProjectGallery/ProjectGallery';
import Sidebar from "./Sidebar";
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  main: {
    width: "auto",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="App">
          <Grid className={classes.main} spacing={16} container>
            <Grid item md={4}>
              <Sidebar />
            </Grid>
            <Grid item md={8}>
              <Switch>
                <Route exact path="/" component={ProjectGallery} />
                <Route path="project/:slug" component={ProjectDetails} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);