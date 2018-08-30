import React, { Component } from 'react';
import Dashboard from './components/dashboard/index'; 
import InstallMetaMask from './components/web3/install-metamask/install-metamask-component';

class App extends Component {

  render() {
    const { web3 } = window;
    return web3?(<Dashboard/>):(<InstallMetaMask/>);
  }
}

export default App;
