import Web3 from 'web3';
import networks from '../web3/networks';


export default class Web3Proxy {

    constructor(desiredNetwork=undefined) {
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
        // const web3 = new Web3(window.web3.currentProvider);
        // const windowWeb3 = window.web3;
        // debugger;
        return new Promise((resolve, reject) => {
            resolve(this._web3.eth.defaultAccount);
        })        
    }

    getAccounts = () => {
        return new Promise((resolve, reject) => {
            resolve(this._web3.eth.accounts);
        })
    }

    getNetwork = () => {
        return new Promise((resolve, reject) => {
            this._web3.version.getNetwork((error, netId) => {
                if (error) {
                    reject(error);
                }
                resolve(networks.get(netId));
            });
        })
    }

    getDesiredNetwork = () => {
        return new Promise((resolve, reject) => {
            resolve(networks.get(this._desiredNetwork));
        })        
    }

    isDesiredNetwork = () => {
        return new Promise((resolve, reject) => {
            this._web3.version.getNetwork((error, netId) => {
                if (error) {
                    resolve(false);
                }
                resolve(this._desiredNetwork === netId);
            });
        });
    }
}
