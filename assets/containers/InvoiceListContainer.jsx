import React, { Component } from "react";
import InvoiceList from "../components/InvoiceList";

class InvoiceListContainer extends Component {
  render () {
    return (
      <InvoiceList
        invoices={[
          {
            amount: 3540,
            currency: "USD",
            paid: false,
            date: "3-21-2018",
            pdfPath: "/invoices/loan-laux-invoice-bfh6-j3kf-gjpe-56ju.pdf"
          },
          {
            amount: 9500,
            currency: "USD",
            paid: true,
            date: "3-11-2018",
            pdfPath: "/invoices/loan-laux-invoice-bfh6-j3kf-gjpe-56ju.pdf"
          },
          {
            amount: 2560,
            currency: "USD",
            paid: true,
            date: "2-28-2018",
            pdfPath: "/invoices/loan-laux-invoice-bfh6-j3kf-gjpe-56ju.pdf"
          },
          {
            amount: 4670,
            currency: "USD",
            paid: true,
            date: "2-20-2018",
            pdfPath: "/invoices/loan-laux-invoice-bfh6-j3kf-gjpe-56ju.pdf"
          }
        ]}
      />
    )
  };
}

export default InvoiceListContainer;
