import Web3 from 'web3';
import networks from '../web3/networks';


export default class Web3Proxy {

    constructor(contractAbiJson, contractAddress, defaultNetwork=networks.MAIN_NETWORK) {
        this._contractAbiJson = contractAbiJson;
        this._contractAddress = contractAddress;
        this._defaultNetwork = defaultNetwork;

        const { web3 } = window;
        if (web3) {
            this._web3old = window.web3;
            this.initWithCurrentProvider(web3.currentProvider);
        }
    }

    initWithCurrentProvider = (provider) => {
        this._web3 = new Web3(provider);
        this._contract = new this._web3.eth.Contract(this._contractAbiJson, this._contractAddress);
    }

    getAccounts = () => {
        return this._web3.eth.getAccounts();
    }

    getBalance = (account) => {
        const contract = this._contract;

        return new Promise((resolve, reject) => {
            contract.methods.balanceOf(account)
            .call({ from: account })
            .then(result=>{
                resolve(result);
            });
        })        
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

    transferTo = (sendingAddress, beneficiaryAddress, amount) => {
        const contract = this._contract;

        return new Promise((resolve, reject) => {
            contract.methods.transfer(beneficiaryAddress, amount)
            .send({ from: sendingAddress })
            .on('transactionHash', hash=>{
                resolve(hash);
            })
            .on('error', error=>{
                reject(error)
            });                
        })
    }

    setMinter = (mintingAddress) => {
        const contract = this._contract;

        return new Promise((resolve, reject) => {
            contract.methods.setMinter(mintingAddress)
            .send({ from: mintingAddress })
            .on('transactionHash', hash=>{
                resolve(hash);
            })
            .on('error', error=>{
                reject(error)
            })
            .on('receipt', function(receipt){
                console.log(receipt.contractAddress) // contains the new contract address
            });
        })
    }

    mintTo = (mintingAddress, beneficiaryAddress, amount) => {
        const contract = this._contract;

        return new Promise((resolve, reject) => {
            contract.methods.mint(beneficiaryAddress, amount)
            .send({ from: mintingAddress })
            .on('transactionHash', hash=>{
                resolve(hash);
            })
            .on('error', error=>{
                reject(error)
            })
            .on('receipt', function(receipt){
                console.log(receipt.contractAddress) // contains the new contract address
            });
        })
    }
}
