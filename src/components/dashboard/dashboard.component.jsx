import React, { Component } from 'react';
import config from 'react-global-configuration';
import styled from 'styled-components';
import Web3Proxy from '../../web3/web3-proxy';

const DashboardConsole = styled.div`
  background-color: lightblue;
  border: 1px solid blue;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
`;

const ControlStrip = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  height: 40px;
  background-color: lightblue;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 25px;
  min-width: 150px;
  color: azure;
  background: blue;
	border: 3px;
  border-radius: 2.5px;
  margin: auto;
  font-size: 14px;
`;

const TerminalConsole = styled.div`
  border-radius: 5px;
  height: 780px;
  background-color: black;
  color: yellow;
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

const OutputLineList = styled.ul`
  list-style: none;
  padding-inline-start: 10px;
`;

class Dashboard extends Component {

  constructor (props) {
    super(props);
    this.web3Proxy = new Web3Proxy(config.get('desiredNetwork'));
  }

  getDefaultAccount = () => {
    const account = this.web3Proxy.getDefaultAccount();
    this.props.addOutputLine(account?account:"not set");
  }

  setDefaultAccount = () => {
    this.web3Proxy.getAccounts().then(accounts=>{
      const account = (accounts.length > 0)?accounts[0]:"no account";
      this.web3Proxy.setDefaultAccount(account);
    });
  }

  getAccount = () => {
    this.web3Proxy.getAccounts().then(accounts=>{
      const account = (accounts.length > 0)?accounts[0]:"no account";
      this.props.addOutputLine(account);  
    });
  }

  getAccounts = () => {
    this.web3Proxy.getAccounts().then(accounts=>{
      this.props.addOutputLine(JSON.stringify(accounts));  
    });
  }

  getBalance = () => {
    this.web3Proxy.getAccounts().then(accounts=>{
      const account = (accounts.length > 0)?accounts[0]:undefined;
      if (account) {
        this.web3Proxy.getBalance(account).then(balance=>{
          this.props.addOutputLine(`${account}: ${balance}`);
        })
      }
    });
  }

  getDesiredNetwork = () => {
    this.props.addOutputLine(this.web3Proxy.getDefaultNetwork());
  }

  getNetwork = () => {
    this.web3Proxy.getNetwork().then(network=>{
      this.props.addOutputLine(network);
    }) 
  }

  isExpectedNetwork = () => {
    this.web3Proxy.isDesiredNetwork().then(isExpected=>{
      this.props.addOutputLine(isExpected?"TRUE":"FALSE");
    })
  }

  clearTerminal = () => {
    this.props.clearOutputs();
  }

  render() {

    const outputLines = this.props.outputLines.map((outputLine)=>{
      console.log(`outputLine: ${JSON.stringify(outputLine)}`);
      return (
        <li key={outputLine.id}>
          {outputLine.line}
        </li>
      );
    });

    return (
      <DashboardConsole>
        <ControlStrip>
          <Button onClick={this.getDefaultAccount}>Get Default Account</Button>
          <Button onClick={this.setDefaultAccount}>Set Default Account</Button>
          <Button onClick={this.getAccount}>Get Account</Button>
          <Button onClick={this.getAccounts}>Get Accounts</Button>
          <Button onClick={this.getBalance}>Get Balance</Button>
          <Button onClick={this.getDesiredNetwork}>Get Desired Network</Button>
          <Button onClick={this.getNetwork}>Get Network</Button>
          <Button onClick={this.isExpectedNetwork}>Is Expected Network</Button>
        </ControlStrip>
        <TerminalConsole>
          <OutputLineList>
            {outputLines}
          </OutputLineList>
        </TerminalConsole>
        <ControlStrip style={{border: 0}}>
          <Button onClick={this.clearTerminal}>Clear</Button>
        </ControlStrip>
      </DashboardConsole>
    );
  }
}

export default Dashboard;
