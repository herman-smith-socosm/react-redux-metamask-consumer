import React, { Component } from 'react';
import styled from 'styled-components';
import Web3AccountProvider from '../../services/web3/account-provider';

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
`;

class Dashboard extends Component {

  addLine = () => {
    this.props.addOutputLine("line content");
  }

  getAccount() {
    this.setState();
    this.state.outputLines.push(Web3AccountProvider.getAccount());
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
          <Button onClick={this.addLine}>Add Line</Button>
          <Button onClick={this.getAccount}>Get Account</Button>
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
