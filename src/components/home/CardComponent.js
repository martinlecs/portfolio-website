import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//TODO: Make form consistent with how data is stored in firestore

const styles = theme => ({
  card: {
    maxWidth: 275
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class CardComponent extends Component {
  render() {
    const { classes } = this.props;
    const { data } = this.props;
    return (
      <Grid
        item
      >
        <Card className={classes.card}>
          <CardHeader title={data.name} subheader="Today's date" />
          <CardMedia
            className={classes.media}
            image={data.images}
            title={data.name}
          />
          <CardContent>
            <Typography component="p">{data.summary}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);
