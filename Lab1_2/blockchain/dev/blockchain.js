class Blockchain {
	constructor() {
		this.chain = [];
		this.newTransactions = [];
	}

	// add other methods for the blockchain here
}

Blockchain.prototype.createNewBlock = function (
	nonce,
	previousBlockHash,
	hash
) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.newTransaction,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash,
	};
	this.newTransaction = [];
	this.chain.push(newBlock);
	return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
	return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
	amount,
	sender,
	recipient
) {
	const newTransaction = {
		amount: amount,
		sender: sender,
		recipient: recipient,
	};

	this.newTransactions.push(newTransaction);
	return this.newTransaction;
};

module.exports = Blockchain;
