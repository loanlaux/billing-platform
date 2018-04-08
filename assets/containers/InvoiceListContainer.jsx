import React, { Component } from "react";
import InvoiceList from "../components/InvoiceList";

class InvoiceListContainer extends Component {
  constructor() {
    super();

    this.state = {
      invoices: []
    };
  }

  componentWillMount() {
    fetch("/api/invoices")
      .then((response) => response.json())
      .then(({ invoices }) => {
        console.log("invoices", invoices);
        this.setState({ invoices });
      });
  }

  render () {
    return (
      <InvoiceList
        invoices={this.state.invoices}
      />
    )
  };
}

export default InvoiceListContainer;
