class Web3AccountProvider {

    constructor() {
        this.web3 = window.web3;
    }

    static getAccount() {
        return window.web3.eth.defaultAccount;
    }
}

export default Web3AccountProvider;