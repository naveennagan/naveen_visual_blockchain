import React, { Component, Fragment } from 'react';
import Wallet from './Wallet.jsx';
import Transaction from './Transaction.jsx';
import StartUpComponent from './StartUp.jsx';

//To be fetched from database.
const wallets = [
  { id: 'chennai', name: 'Chennai', balance: 100 },
  { id: 'hyderabad', name: 'Hyderabad', balance: 200 },
  { id: 'bangalore', name: 'Bangalore', balance: 150 }
];

const leaderBoard = ["Hyderabad", "Chennai", "Bangalore"];

const transactions = [
  {
    id: `ch100${Date.now()}`,
    senderId: 'chennai',
    recieverId: 'hyderabad',
    amount: 100,
    date: Date.now()
  },
  {
    id: `hb100${Date.now()}`,
    senderId: 'hyderabad',
    recieverId: 'bangalore',
    amount: 100,
    date: Date.now()
  },
  {
    id: `bc100${Date.now()}`,
    senderId: 'bangalore',
    recieverId: 'chennai',
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
    this.getLeaderBoardSection = this.getLeaderBoardSection.bind(this);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  addBlock = (data) => {
    var currentDateTime = Date.now();
    var blockData = {
      date: currentDateTime,
      reciever: data.reciever,
      sender: data.sender,
      amount: data.amount
    }
    console.log("Adding Block Chain ! ");
    this.props.addBlock(blockData);
  }

  getBlocksSection = () => {
    return (
      <div className="card" style={{ 'width': '10rem' }}>
        <ul className="list-group list-group-flush">
          {
            this.props.blocks.map((block) => {
              return (
                <li className="list-group-item">
                  Block ID {block.date}
                  <p>
                    {block.reciever} recieved {block.amount} from {block.sender}
                  </p>
                </li>)
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
            this.props.transactions.map((transaction) => {
              return (<Transaction addBlock={this.addBlock} data={transaction}></Transaction>)
            })
          }
        </div>
      </div>
    )
  }

  getLeaderBoardSection = () => {
    return (
      <div className="card" style={{ 'width': '10rem' }}>
        <ul className="list-group list-group-flush">
          {
            leaderBoard.map((city, index) => {
              return (
                <li className="list-group-item">
                  <p>
                    {index + 1} {city}
                  </p>
                </li>)
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <StartUpComponent />
        <div className="container" >
          <div className="row">
            <div className="col-2">
              <h1>Blocks</h1>
              {this.getBlocksSection()}
            </div>
            <div className="col-8">
              <h2> Dashboard.</h2>
              {this.getTransactionsSection()}
              <h2> Wallets </h2>
              {this.getWalletsSection()}
            </div>
            <div className="col-2">
              <h3>LeaderBoard</h3>
              {this.getLeaderBoardSection()}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }


}
export default DashBoard