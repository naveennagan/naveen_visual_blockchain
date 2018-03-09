import React, { Component } from 'react';
var get = require('lodash.get');

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.getReciever = this.getReciever.bind(this);
    this.getSender = this.getSender.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.validateTransaction = this.validateTransaction.bind(this);
  }

  getReciever = () => {
    return get(this.props, "data.recieverId") || 'NA';
  }

  getSender = () => {
    return get(this.props, "data.senderId") || 'NA';
  }

  getAmount = () => {
    return get(this.props, "data.amount") || 0;
  }

  validateTransaction = () => {
    console.log("Validating Transaction ! ");
    console.log("Open a Popup ! ");
  }

  render() {
    return (
      <div className="card" style={{ width: "10rem" }}>
        <div className="card-body">
          <p className="card-text">
            {this.getSender()} to {this.getReciever()}
          </p>
          <p> Amount - {this.getAmount()} </p>
          <a onClick={this.validateTransaction} className="btn btn-info">Validate</a>
        </div>
      </div>
    )
  }
}

export default Transaction;