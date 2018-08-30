import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import Dashboard from './components/dashboard/index'; 
import InstallMetaMask from './components/web3/install-metamask/install-metamask-component';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }
  
  render() {
    const { web3 } = window;
    return web3?(<Dashboard/>):(<InstallMetaMask/>);
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
