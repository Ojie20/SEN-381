const Blockchain = require('./blockchain');
const veroin = new Blockchain();

// define a sample random previous block
const previousBlockHash = '20985DA6CCF066ADED38C1D27C35692E11';
// create a new block for a currenst blick representation
const currentBlockData = [
  {
    amount: 10,
    sender: 'WH3GE9C0E5CD571',
    recipient: '8UDBSYTA5TBHYARTB'
  }
]
// give the nonce a value
const nonce = 100
// then define the full block
const hash = veroin.hashBlock(previousBlockHash,currentBlockData,nonce)

console.log(hash);
