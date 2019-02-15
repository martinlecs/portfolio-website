import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { MyProvider } from './components/context/DrawerContext';
import Main from './components/hoc/Main';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import AddProject from './components/projects/AddProject';
import ProjectDetails from './components/projects/ProjectDetails';
import { theme } from './components/themes/MuiTheme';
import Sidebar from "./components/layout/Sidebar/Sidebar";

//TODO: clean this shit up it hurts my eyes
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MyProvider>
          <BrowserRouter>
            <div className="App">
              {/*<Navbar />*/}
              <Sidebar/>
              <Switch>
                {/*<Main>*/}
                  {/*<Route exact path="/" component={Home} />*/}
                  {/*<Route path="/project/:slug" component={ProjectDetails} />*/}
                  {/*<Route path="/signin" component={SignIn} />*/}
                  {/*<Route path="/signup" component={SignUp} />*/}
                  {/*<Route path="/addproject" component={AddProject} />*/}
                {/*</Main>*/}
              </Switch>
            </div>
          </BrowserRouter>
        </MyProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
