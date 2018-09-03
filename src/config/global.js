import networks from '../web3/networks';
const abi = require('./abi.json');

const config = {
  abi: JSON.stringify(abi),
  contractAddress: '0xbe5cfc105e4078d1a84a252c9009b1f9106296aa',
  beneficiaryAddress: '0x0e7cbb02e12ce1421e3b62593da361c1ea41962b',
  desiredNetwork: networks.PRIVATE_NETWORK
};

export default config;