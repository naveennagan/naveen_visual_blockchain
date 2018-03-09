import React, { Component } from 'react';
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
  }

  addBlock = () => {
    var currentDateTime = Date.now();
    var blockData = {
      name: currentDateTime
    }
    console.log("Adding Block Chain ! ");
    this.props.addBlock(blockData);
  }

  getBlocks = () => {
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

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col">
            <h1>Blocks</h1>
            {this.getBlocks()}
          </div>
          <div className="col-10">
            <h2> Dashboard.</h2>
            <button onClick={this.addBlock}
              type="button" className="btn btn-primary">ADD BLOCK</button>
          </div>
        </div>
      </div>
    );
  }


}
export default DashBoard