import React, { Component } from 'react';

class StartUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: true, node: "New Delhi " };
    this.closePopup = this.closePopup.bind(this);
    this.onChangeNode = this.onChangeNode.bind(this);
    this.selectNode = this.selectNode.bind(this);
    this.getModalClass = this.getModalClass.bind(this);

  }

  closePopup = () => {
    this.setState({ showPopup: false })
  }

  onChangeNode = (node) => {
    return () => {
      console.log("Current Node ! ");
      this.setState({ node: node });
    }
  }

  selectNode = () => {
    console.log("Node Changed ", this.state.node);
  }

  getModalClass = () => {
    return this.state.showPopup ? 'modal fade show' : 'modal fade';
  }

  render() {
    return (
      <div className={this.getModalClass()} style={{ display: 'block' }}
        tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Choose Your City .</h5>
              <button onClick={this.closePopup} type="button"
                className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <p>Choose Your City ! </p>
                  <p>{this.state.node}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.closePopup}
                className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={this.selectNode}
                className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default StartUpComponent;