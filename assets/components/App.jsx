import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";

import NotFound from "./NotFound";
import InvoiceListContainer from "../containers/InvoiceListContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonClick={(showMenu) => this.setState({ showMenu })}
          style={{ position: "fixed" }}
          title="Invoices"
        />
        <Drawer
          docked={false}
          open={this.state.showMenu}
          onRequestChange={(showMenu) => this.setState({ showMenu })}
        />
        <main>
          <Switch>
            <Route path="/" component={InvoiceListContainer} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
