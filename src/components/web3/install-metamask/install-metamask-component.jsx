import React from 'react';
import styled from 'styled-components';
import metamaskImage from '../../../images/metamask-horizontal.svg';

const TipStrip = styled.div`
  background-color: #F6851B;
  border: 1px solid black;
  border-radius: 5px;
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TipRow = styled.div`
  color: #814718;
  font-family: "Transat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

const MetaMaskImage = styled.div`
  width: 550px;
`;

const InstallMetaMask = () => (
  <a href="https://metamask.io/" style={{ textDecoration: 'none' }}>
    <TipStrip>
      <TipRow>
          Download
      </TipRow>
      <TipRow>
        <MetaMaskImage>
          <img src={metamaskImage} alt="MetaMask" />
        </MetaMaskImage>
      </TipRow>
    </TipStrip>
  </a>
);

export default InstallMetaMask;
 