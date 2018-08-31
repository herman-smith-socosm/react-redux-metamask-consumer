import Web3 from 'web3';
import networks from '../web3/networks';


export default class Web3Proxy {

    constructor(defaultNetwork=networks.MAIN_NETWORK) {
        this._defaultNetwork = defaultNetwork;
        const { web3 } = window;
        if (web3) {
            this._web3old = window.web3;
            this.initWithCurrentProvider(web3.currentProvider);
        }
    }

    initWithCurrentProvider = (provider) => {
        this._web3 = new Web3(provider)
    }

    getAccounts = () => {
        return this._web3.eth.getAccounts();
    }

    getBalance = (account) => {
        return this._web3.eth.getBalance(account);
    }    
    
    getDefaultAccount = () => {
        return this._web3.eth.defaultAccount;
    }
    
    setDefaultAccount = (account) => {
        this._web3.eth.defaultAccount = account;
    }

    getNetwork = () => {
        return this._web3.eth.net.getNetworkType();
    }

    getDefaultNetwork = () => {
        return this._defaultNetwork;
    }

    setDefaultNetwork = (defaultNetwork) => {
        this._defaultNetwork = defaultNetwork;
    }

    isDesiredNetwork = () => {
        const defaultNetwork = this._defaultNetwork;
        return this._web3.eth.net.getNetworkType().then(network=>{
            return new Promise(resolve => resolve(defaultNetwork === network))
        });
    }
}
