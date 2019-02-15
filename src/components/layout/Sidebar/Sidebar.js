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

          <Grid className={classes.grid} item>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
              cursus neque. Quisque pellentesque est eget odio maximus, posuere
              consequat nunc fermentum. Sed vel ligula nisl. Suspendisse congue et
              dolor aliquet consequat. Sed pharetra aliquet dui id tempus. Nam id
              urna dui. Praesent eget efficitur libero. Donec interdum lorem at ex
              dignissim volutpat. Fusce condimentum porta leo vitae aliquet.
              Vivamus eget aliquet purus. Aenean odio nibh, rhoncus non egestas
              viverra, maximus ac ligula. Proin non ligula quis felis sagittis
              tincidunt vel sit amet velit. Donec id massa sit amet lorem cursus
              mattis et eget turpis. Vivamus non fringilla elit. Cras bibendum
              volutpat bibendum. Maecenas ac sollicitudin quam, sit amet dignissim
              erat. Donec fringilla blandit volutpat. In maximus pellentesque
              massa, a accumsan ex facilisis quis. Mauris feugiat mi id elit
              bibendum sollicitudin. Phasellus sem arcu, aliquam nec consectetur
              sed, semper sit amet turpis. Integer consectetur aliquam sem ornare
              auctor. Vivamus dictum pretium quam. Nulla dignissim libero aliquet
              est fermentum eleifend. Sed ultricies id lorem at vehicula. In hac
              habitasse platea dictumst. Duis nibh lorem, aliquet id lorem non,
              bibendum volutpat sapien. Suspendisse urna mauris, facilisis vitae
              scelerisque eu, ornare ac velit. Aliquam erat volutpat. Fusce et
              neque vel dui condimentum elementum. Nam ipsum magna, dapibus vitae
              lorem quis, porta feugiat nisl. Ut posuere odio ligula, eget
              porttitor quam pretium et. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nullam lacinia purus
              nunc, efficitur sollicitudin augue mollis id. Nulla rutrum eget
              turpis dapibus maximus. Curabitur non lacus justo.
            </Typography>
          </Grid>

          <Grid className={classes.grid} item>
            
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Sidebar);
