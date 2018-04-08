import React from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "material-ui/AppBar";

import NotFound from "./NotFound";
import InvoiceListContainer from "../containers/InvoiceListContainer";

const App = () => (
  <div>
    <AppBar title="Invoices" />
    <main>
      <Switch>
        <Route path="/" component={InvoiceListContainer} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
