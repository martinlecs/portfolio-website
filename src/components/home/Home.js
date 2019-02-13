import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CardComponent from "./CardComponent";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Home extends Component {
  render() {
    const { classes, projects } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        spacing={16}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {projects.map(card => (
          <CardComponent key={card.id} data={card} />
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.project.projects
  };
};

export default withStyles(styles)(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
  )(Home)
);
