import React, { Component } from 'react';
import styled from 'styled-components';

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
  height: 555px;
  background-color: black;
  color: yellow;
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

const TerminalWindow = styled.textarea`
  width: 100%;
  height: 100%;
  backround-color: black;
  color: yellow;
`;

class Dashboard extends Component {

  render() {
    return (
      <DashboardConsole>
        <ControlStrip>
          <Button onClick={this.getAccount}>Get Account</Button>
          <Button onClick={this.checkProvider}>Check provider</Button>
          <Button onClick={this.getNetwork}>Get network</Button>
          <Button onClick={this.getNetworkId}>Get network id</Button>
          <Button onClick={this.getMethods}>Methods</Button>
          <Button onClick={this.checkBalance}>Check my balance</Button>
          <Button onClick={this.owner}>Owner</Button>
          <Button onClick={this.transfer}>Transfer</Button>
        </ControlStrip>
        <TerminalConsole>...</TerminalConsole>
        <ControlStrip style={{border: 0}}>
          <Button onClick={this.clearTerminal}>Clear</Button>
        </ControlStrip>
      </DashboardConsole>
    );
  }
}

export default Dashboard;
