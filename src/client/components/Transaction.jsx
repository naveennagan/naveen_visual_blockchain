import React, { Component, Fragment } from 'react';
var get = require('lodash.get');
import ValidateTransaction from './ValidateTransaction.jsx';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showValidateTransaction: false,
      transaction: this.props.data || {}
    };
    this.getReciever = this.getReciever.bind(this);
    this.getSender = this.getSender.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.validateTransaction = this.validateTransaction.bind(this);
    this.saveTransaction = this.saveTransaction.bind(this);
    this.closeTransactionPopup = this.closeTransactionPopup.bind(this);
    this.getValidatePopoverSection = this.getValidatePopoverSection.bind(this);

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
    return () => {
      console.log("Validating Transaction ! ");
      console.log("Open a Popup ! ");
      this.setState({
        showValidateTransaction: true
      })
    }
  }

  saveTransaction = () => {
    this.setState({
      transaction: {},
      showValidateTransaction: false
    })
    console.log("Transaction saved ! ");
  }

  closeTransactionPopup = () => {
    this.setState({
      transaction: {},
      showValidateTransaction: false
    })
    console.log("Transaction closed ! ");
  }

  getValidatePopoverSection = () => {
    return this.state.showValidateTransaction ? (
      <ValidateTransaction
        saveTransaction={this.saveTransaction}
        cancelValidation={this.closeTransactionPopup}
        data={this.state.transaction}
      >
      </ValidateTransaction>
    ) : ""
  }

  render() {
    return (
      <Fragment>
        <div className="card" style={{ width: "11rem" }}>
          <div className="card-body">
            <p className="card-text">
              {this.getSender()} to {this.getReciever()}
            </p>
            <p> Amount - {this.getAmount()} </p>
            <a onClick={this.validateTransaction()} className="btn btn-info">Validate</a>
          </div>
        </div>
        {this.getValidatePopoverSection()}
      </Fragment>
    )
  }
}

export default Transaction;