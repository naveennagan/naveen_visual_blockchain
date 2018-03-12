import React, { Component } from 'react';

class ValidateTransaction extends Component {
  constructor(props) {
    super(props);
    this.validateTransaction = this.validateTransaction.bind(this);
    this.cancelValidation = this.cancelValidation.bind(this);
  }

  validateTransaction = () => {
    this.props.saveTransaction();
  }

  cancelValidation = () => {
    this.props.cancelValidation();
  }

  render() {
    return (
      <div className="modal show" style={{ display: 'block' }}
        tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Mine this Transaction.</h5>
              <button onClick={this.cancelValidation} type="button"
                className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    Step 1.
                        </div>
                  <div className="col">
                    Step 2.
                        </div>
                  <div className="col">
                    Step 3.
                        </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.cancelValidation}
                className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={this.validateTransaction}
                className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ValidateTransaction;