import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import ProjectCard from "./ProjectCard";

const styles = (theme) => ({
  main: {
    width: "auto",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  about: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },
  grid: {
    // paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
});

class Sidebar extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({value})
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.main} spacing={16} container>
        <Grid item md={4}>
          <header>
            <Typography variant="h3">Martin Le</Typography>
            <Typography variant="h5" gutterBottom>
              Product Management and Interactive Media
            </Typography>
          </header>
          <List>
            <ListItem button divider component={Link} to="addproject">
              Projects
            </ListItem>
            <ListItem button divider component={Link} to="/">
              Resume
            </ListItem>
            <ListItem button divider component={Link} to="/">
              Contact
            </ListItem>
          </List>
          <Grid className={classes.about} item>
            <Typography variant="h6">
              ABOUT
            </Typography>
            <Typography variant="subtitle1">
              Australian product manager and general interactive media developer.
            </Typography>
            <br/>
            <Typography variant="subtitle1">
              Has a passion for creating interesting user interactions and shiba inus.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={8}>

          <Grid className={classes.grid} item>
            <Paper square>
            <Tabs
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={this.handleTabChange}
            >
              <Tab label="All"></Tab>
              <Tab label="Apps"></Tab>
              <Tab label="UI Designs"></Tab>
              <Tab label="Games"></Tab>
            </Tabs>
            </Paper>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs={12} md={4}>
              <ProjectCard/>
            </Grid>
            <Grid item xs={12} md={4}>
              <ProjectCard/>
            </Grid>
            <Grid item xs={12} md={4}>
              <ProjectCard/>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Sidebar);
