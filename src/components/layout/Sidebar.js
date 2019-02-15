import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = theme => ({
  about: {
    paddingTop: theme.spacing.unit * 3
  },
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
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
          <Typography variant="h6">ABOUT</Typography>
          <Typography variant="subtitle1">
            Australian product manager and general interactive media developer.
          </Typography>
          <br />
          <Typography variant="subtitle1">
            Has a passion for creating interesting user interactions and shiba
            inus.
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Sidebar);
