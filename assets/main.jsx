import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue800 } from "material-ui/styles/colors";

import InvoiceListContainer from 'containers/InvoiceListContainer';
import NotFound from 'components/NotFound';

render(
  <MuiThemeProvider
    muiTheme={getMuiTheme({
      palette: {
        primary1Color: blue800
      }
    })}
  >
    <Router history={browserHistory}>
      <Route path="/" component={InvoiceListContainer} />
      <Route path="/*" component={NotFound} />
    </Router>
  </MuiThemeProvider>, document.getElementById('app'));
