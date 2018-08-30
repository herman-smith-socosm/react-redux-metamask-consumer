import Web3 from 'web3';
/* eslint-disable */
import {
    MAIN_NETWORK, 
    MORDEN_NETWORK, 
    ROPSTEN_NETWORK, 
    PRIVATE_NETWORK 
} from './networks';
/* eslint-enable */

export default class Web3Proxy {

    constructor(desiredNetwork) {
        this._desiredNetwork = desiredNetwork;
        const { web3 } = window;
        if (web3) {
            this.initWithCurrentProvider(web3.currentProvider);
        }
    }

    initWithCurrentProvider = (currentProvider) => {
        this._web3 = new Web3(currentProvider)
    }

    getAccount = () => {
        this._web3.eth.getAccounts(accounts=>{
            debugger;
            console.log(`accounts: ${JSON.stringify(accounts)}`);
        });
        return this._web3.eth.defaultAccount;
    }

    getNetwork = () => {
        return new Promise((resolve, reject) => {
            this._web3.eth.net.getNetworkType((error, metamaskNetwork)=>{
                if (error) {
                    reject(error);
                }
                resolve(metamaskNetwork);
            });
        });
    }

    isDesiredNetwork = () => {
        return new Promise((resolve, reject) => {
            this._web3.eth.net.getNetworkType((error, metamaskNetwork)=>{
                if (error) {
                    resolve(false);
                }
                resolve(this._desiredNetwork === metamaskNetwork);
            });
        });
    }
}
