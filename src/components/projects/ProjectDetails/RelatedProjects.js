import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "./ProjectDetails";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    // backgroundColor: theme.palette.background.paper,
  },
  // gridList: {
  //   width: 500,
  //   height: 450,
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class RelatedProjects extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <GridList>

          <GridListTile>
            <img src="http://placekitten.com/300/200" alt="project"/>
            <GridListTileBar
              title="project"
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="http://placekitten.com/300/200" alt="project"/>
            <GridListTileBar
              title="project"
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

          <GridListTile>
            <img src="http://placekitten.com/300/200" alt="project"/>
            <GridListTileBar
              title="project"
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(RelatedProjects);
