import React, { Component, createContext } from "react";
import Main from "./components/hoc/Main";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/themes/MuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddProject from "./components/projects/AddProject";

export const DrawerContext = createContext({ open: false });

class MyProvider extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <DrawerContext.Provider
        value={{
          state: this.state,
          toggleDrawer: () => {
            this.setState(state => ({ open: !state.open }));
          }
        }}
      >
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
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Main>
                  <Route exact path="/" component={Home} />
                  <Route path="/project/:slug" component={ProjectDetails} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/addproject" component={AddProject} />
                </Main>
              </Switch>
            </div>
          </BrowserRouter>
        </MyProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
