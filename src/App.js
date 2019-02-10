import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './components/themes/MuiTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
