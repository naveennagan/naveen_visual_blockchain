import React, { Component, Fragment } from 'react';
import Wallet from './Wallet.jsx';

//To be fetched from database.
const wallets = [
  { name: 'Naveen', balance: 100 },
  { name: 'Sasuke', balance: 200 },
  { name: 'Itachi', balance: 150 }
];
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
    this.getBlocksSection = this.getBlocksSection.bind(this);
    this.getWalletsSection = this.getWalletsSection.bind(this);
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
      <Fragment >
        <div class="row">
          {wallets.map((wallet) => {
            return (<Wallet wallet={wallet}></Wallet>)
          })}
        </div>
      </Fragment >
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
            <button onClick={this.addBlock}
              type="button" className="btn btn-primary">ADD BLOCK</button>
            {this.getWalletsSection()}
          </div>
        </div>
      </div>
    );
  }


}
export default DashBoard