import React, { Component, Fragment } from 'react';
import Wallet from './Wallet.jsx';
import Transaction from './Transaction.jsx';

//To be fetched from database.
const wallets = [
  { id: 'naveen', name: 'Naveen', balance: 100 },
  { id: 'sasuke', name: 'Sasuke', balance: 200 },
  { id: 'itachi', name: 'Itachi', balance: 150 }
];

const transactions = [
  {
    id: `ns100${Date.now()}`,
    senderId: 'naveen',
    recieverId: 'sasuke',
    amount: 100,
    date: Date.now()
  },
  {
    id: `ns100${Date.now()}`,
    senderId: 'sasuke',
    recieverId: 'itachi',
    amount: 100,
    date: Date.now()
  },
  {
    id: `ns100${Date.now()}`,
    senderId: 'itachi',
    recieverId: 'naveen',
    amount: 100,
    date: Date.now()
  }
];
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
    this.getBlocksSection = this.getBlocksSection.bind(this);
    this.getWalletsSection = this.getWalletsSection.bind(this);
    this.getTransactionsSection = this.getTransactionsSection.bind(this);
  }

  addBlock = () => {
    var currentDateTime = Date.now();
    var blockData = {
      name: currentDateTime
    }
    console.log("Adding Block Chain ! ");
    this.props.addBlock(blockData);
  }

  getBlocksSection = () => {
    return (
      <div className="card" style={{ 'width': '18rem' }}>
        <ul className="list-group list-group-flush">
          {
            this.props.blocks.map((block) => {
              return (<li className="list-group-item">Block Data {block.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }

  getWalletsSection = () => {
    return (
      <div className="container" >
        <div className="row">
          {
            wallets.map((wallet) => {
              return (<Wallet wallet={wallet}></Wallet>)
            })
          }
        </div>
      </div>
    )
  }

  getTransactionsSection = () => {
    return (
      <div className="container">
        <h2> New Transactions ! </h2>
        <div className="row">
          {
            transactions.map((transaction) => {
              return (<Transaction addBlock={this.addBlock} data={transaction}></Transaction>)
            })
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col">
            <h1>Blocks</h1>
            {this.getBlocksSection()}
          </div>
          <div className="col-8">
            <h2> Dashboard.</h2>
            {this.getTransactionsSection()}
            <h2> Wallets </h2>
            {this.getWalletsSection()}
          </div>
        </div>
      </div>
    );
  }


}
export default DashBoard