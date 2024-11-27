const sha256 = require('sha256');

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

Blockchain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce){
  // the data string will consist of previous block, nonce and present block. This further makes the secret key generated difficult to compromise
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  // The String is then hashed 
  const hash = sha256(dataAsString);
  // The hash is then returned
  return hash
};

module.exports = Blockchain