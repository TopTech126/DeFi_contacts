//import Web3 from 'web3';
const Web3 = require("web3");//dont want to use this

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export class EthereumAccount {

    private web3: typeof Web3;//dont want to use typeof
    private address: string;
   
    // Got an Default Account Address from Etherscan: https://etherscan.io/accounts
    public constructor(address: string = "0xDeE6238780f98c0ca2c2C28453149bEA49a3Abc9") {
        this.address = address;
        this.web3 = new Web3("https://mainnet.infura.io/v3/copy_your_url_here");
    }

    public getAddress(): string {
      return this.address;
    }

    public async getBalance() {
      return await this.web3.eth.getBalance(this.address);
    }
  }