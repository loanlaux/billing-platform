import React, { Component } from 'react';
import PropTypes from "prop-types";
import Router, { Link, RouteHandler } from 'react-router';
import AppBar from "material-ui/AppBar";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import FlatButton from 'material-ui/FlatButton';
import CardAmount from "./CardAmount";

// components

export default class App extends Component {
  propTypes = {
    invoices: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { invoices } = this.props;

    return (
      <div className="app">
        <AppBar />
        <div className="container">
          {invoices.map((invoice) => (
            <Card className="card">
              <CardAmount
                amount={invoice.amount}
                paid={invoice.paid}
              />
              <CardText>{invoice.date}</CardText>
              <CardActions>
                {!invoice.paid && <FlatButton label="PAY" />}
                <FlatButton label="DOWNLOAD PDF" />
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
