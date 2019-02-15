import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/layout/Main';
import { theme } from './components/themes/MuiTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
