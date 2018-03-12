import React, { Component } from 'react';
var get = require('lodash.get');

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.getWalletBalance = this.getWalletBalance.bind(this);
    this.getWalletName = this.getWalletName.bind(this);
  }

  getWalletName = () => {
    return get(this.props, 'wallet.name') || 'NA';
  }

  getWalletBalance = () => {
    return get(this.props, 'wallet.balance') || 0;
  }

  render() {
    return (
      <div className="card" style={{ width: "10rem" }}>
        <img className="card-img-top" src="images/wallet.jpeg" alt="Wallet" />
        <div className="card-body">
          <p className="card-text">{this.getWalletName()}</p>
          <p className="card-text">Balance Rs.{this.getWalletBalance()}</p>
        </div>
      </div>
    )
  }
}
export default Wallet;