import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import InfoTable from "./InfoTable";
import RelatedProjects from "./RelatedProjects";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    // paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  uppercase: {
    textTransform: "uppercase"
  }
});

class ProjectDetails extends Component {
  render() {
    const { classes, project } = this.props;
    // CONDITIONAL TO CHECK IF PROJECT EXISTS YET, RETURN SOME SORT OF LOADING
    return (
      <Grid className={classes.root} container direction="column" spacing={16}>
        <Grid item>
          <Typography variant="h4" className={classes.uppercase}>
            Project Name
          </Typography>
        </Grid>
        <Grid item>
          <img src="http://placekitten.com/200/300" alt="Project" />
        </Grid>
        <Grid item>
          <InfoTable />
        </Grid>
        <Grid item>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
            ligula erat, quis tempus turpis elementum in. Integer neque sapien,
            sollicitudin nec leo et, interdum sodales magna. Donec facilisis
            elit nulla, eget mollis mauris commodo sit amet. Aenean et est id
            lacus blandit ultrices sed vel mauris. Ut magna odio, euismod eu
            facilisis vitae, dictum et nibh. Duis nibh justo, cursus nec mollis
            a, blandit ut eros. Cras varius mattis ipsum, eu vestibulum velit
            euismod quis. Phasellus scelerisque ac tellus a elementum. Etiam at
            vestibulum diam. Ut pulvinar placerat purus, eu viverra nibh
            sagittis non. Maecenas eu mauris ex. Sed fringilla arcu eu felis
            rhoncus, eget gravida erat bibendum. Vestibulum sodales luctus
            luctus. Nunc lacus massa, dapibus id sodales eget, feugiat id
            mauris. Proin vulputate, ligula sed elementum aliquam, erat sapien
            porttitor lacus, eu maximus justo velit ac ex. Fusce sodales nulla
            quis leo tristique semper. Integer euismod, eros quis efficitur
            venenatis, lacus lorem consectetur ex, tempus tincidunt purus erat
            quis sapien. Nullam id turpis et lectus rhoncus blandit ac id erat.
            Suspendisse vitae lacinia velit. Aliquam erat volutpat. Nunc ut enim
            aliquam lorem commodo facilisis. Proin ac scelerisque orci. Integer
            sed eros quis dolor bibendum lobortis. Ut ac vulputate augue. Sed
            elementum suscipit tortor, accumsan blandit nisl dictum vitae. Morbi
            viverra cursus libero at sodales. Cras ipsum mi, venenatis ut sem
            non, vehicula porttitor erat. Nulla non est sit amet massa dapibus
            hendrerit. Sed ac arcu eu urna pretium efficitur. Etiam in bibendum
            neque. Etiam feugiat, magna ac lobortis.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h6">
            RELATED PROJECTS - For some reason this freezes react
          </Typography>
          <Divider/>
          <RelatedProjects/>
        </Grid>
      </Grid>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const slug = ownProps.match.params.slug;
//   const projects = state.firestore.data.projects;
//   const project = projects ? projects[slug] : null;
//   return {
//     project: project
//   }
// };

ProjectDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles)
  // connect(mapStateToProps),
  // firestoreConnect([{
  //   collection: 'projects'
  // }])
)(ProjectDetails);
