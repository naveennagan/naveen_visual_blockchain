import React, { Component } from 'react';
import DashboardContainer from '../containers/DashboardContainer.jsx';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DashboardContainer />
    )
  }
}
export default MainComponent;