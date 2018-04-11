import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

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
        >
          <Link to="/"><MenuItem>Invoices</MenuItem></Link>
          <Link to="/payment-information"><MenuItem>Payment information</MenuItem></Link>
          <Link to="/profile"><MenuItem>Profile</MenuItem></Link>
          <MenuItem>Log out</MenuItem>
        </Drawer>
        <main>
          <Switch>
            <Route exact path="/" component={InvoiceListContainer} />
            <Route path="/payment-information" component={NotFound} />
            <Route path="/profile" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
