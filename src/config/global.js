import networks from '../web3/networks';
const abi = require('./abi.json');

const config = {
  abi: JSON.stringify(abi),
  contractAddress: '0x58250bafe2417d3c798f7a124b46ef81fbc185da',
  beneficiaryAddress: '0x0e7cbb02e12ce1421e3b62593da361c1ea41962b',
  desiredNetwork: networks.PRIVATE_NETWORK
};

export default config;