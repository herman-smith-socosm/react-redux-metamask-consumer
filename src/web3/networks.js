/*
 * network types
 *
 * "main" for main network
 * "morden" for the morden test network
 * "ropsten" for the morden test network
 * "private" for undetectable networks.
 */

const MAIN_NETWORK = 'main';
const MORDEN_NETWORK = 'morden';
const ROPSTEN_NETWORK = 'ropsten';
const RINKEBY_NETWORK = 'rinkeby';
const KOVAN_NETWORK = 'kovan';
const PRIVATE_NETWORK = 'private';

const _networks = [
    {id: "0", name: PRIVATE_NETWORK},
    {id: "1", name: MAIN_NETWORK},
    {id: "2", name: MORDEN_NETWORK},
    {id: "3", name: ROPSTEN_NETWORK},
    {id: "4", name: RINKEBY_NETWORK},
    {id: "42", name: KOVAN_NETWORK},
];

const networks = {
    get: (id=undefined) => {
        debugger;
        let result = _networks.find(network=>{return id === network.id});
        return result?result:_networks[0];
    }
}

export default networks;