/*
 * network types
 *
 * "main" for main network
 * "morden" for the morden test network
 * "ropsten" for the morden test network
 * "private" for undetectable networks.
 */

const PRIVATE_NETWORK = 'private';
const MAIN_NETWORK = 'main';
const MORDEN_NETWORK = 'morden';
const ROPSTEN_NETWORK = 'ropsten';
const RINKEBY_NETWORK = 'rinkeby';
const KOVAN_NETWORK = 'kovan';

const networks = {
    MAIN_NETWORK,
    MORDEN_NETWORK,
    ROPSTEN_NETWORK,
    RINKEBY_NETWORK,
    KOVAN_NETWORK,
    PRIVATE_NETWORK
};

export default networks;