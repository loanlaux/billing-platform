import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue800 } from "material-ui/styles/colors";
import App from "./components/App";

render(
  <MuiThemeProvider
    muiTheme={getMuiTheme({
      palette: {
        primary1Color: blue800
      }
    })}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>, document.getElementById('app'));
