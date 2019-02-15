import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import ProjectTabBar from "./ProjectTabBar";

class ProjectGallery extends Component {
  state = {
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <ProjectTabBar
          tabValue={this.state.value}
          handleTabChange={this.handleTabChange}
        />
        <Grid container spacing={16}>
          {["1", "2", "3", "4"].map(id => (
            <Grid key={id} item xs={12} md={4} lg={3}>
              <ProjectCard />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ProjectGallery;
