import React, { Component, createContext } from "react";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar/Navbar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/themes/MuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

export const DrawerContext = createContext({ open: false});

class MyProvider extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <DrawerContext.Provider value={{
        state: this.state,
        toggleDrawer: () => {
          this.setState( state => ({open: !state.open}))
        }
      }}>
        {this.props.children}
      </DrawerContext.Provider>
    );
  }
}


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MyProvider>
          <div className="App">
              <Navbar />
              <Main/>
          </div>
        </MyProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
