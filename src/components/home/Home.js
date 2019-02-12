import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CardComponent from "./CardComponent";
import { cardData } from "./CardData";

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    const data = cardData;

    return (
      <Grid
        container
        className={classes.root}
        spacing={16}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
          {data.map(card => (
            <CardComponent key={card.id} data={card} />
          ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
