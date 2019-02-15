import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class ProjectDetails extends Component {
  render() {
    const { classes, project } = this.props;
    // CONDITIONAL TO CHECK IF PROJECT EXISTS YET, RETURN SOME SORT OF LOADING
    return (
      <Grid container spacing={16} direction="column">


      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[slug] : null;
  return {
    project: project
  }
};

ProjectDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails);
