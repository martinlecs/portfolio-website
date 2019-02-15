import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a'
    },
    secondary: {
      main: '#f4511e'
    }
  },
  status: {
    danger: "orange"
  },
  custom: {
    drawerWidth: 240
  }
});
