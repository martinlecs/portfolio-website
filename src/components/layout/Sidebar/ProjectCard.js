import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (themes) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class ProjectCard extends Component {
  render() {
    const { classes } = this.props;
    return (
     <Card className={classes.card}>
       <CardActionArea>
         <CardMedia
          className={classes.media}
          image="http://placekitten.com/200/300"
          title="Placeholder kitten"
         />
         <CardContent>
           <Typography
            variant="h6"
           >
            Placeholder Kitten Project
           </Typography>
         </CardContent>
       </CardActionArea>
     </Card>
   );
  }
}

export default withStyles(styles)(ProjectCard);