import React, { Component } from 'react';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.addBlock = this.addBlock.bind(this);
  }

  addBlock = () => {
    var currentDateTime = Date.now();
    var blockData = {
      name: currentDateTime
    }
    console.log("Adding Block Chain ! ");
    this.props.addBlock(blockData);
  }

  render() {
    return (
      <div>
        <button onClick={this.addBlock} class="block__add"> Add Block </button>
        {
          this.props.blocks.map((block) => {
            return (<p>Block Data {block.name}</p>)
          })
        }
      </div>
    )
  }
}
export default DashBoard