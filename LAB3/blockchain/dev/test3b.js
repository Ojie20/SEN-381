const Blockchain = require("./blockchain");
// test 1 A
const Ojie_SEN_22_7762 = new Blockchain();

// Ojie_SEN_22_7762.hashBlock();
const previousBlockHash = "87765DA6CCF0668238C1D27C35692E11";

const currentBlockData = [
	{
		amount: 120,
		sender: "ASDB4CEE9C0E5CD571",
		recipient: "321A3F6E462D48E9",
	},
	{
		amount: 20,
		sender: "ASASDDB4CEE9C0E5CD571",
		recipient: "1D45321A3F6E462D48E9",
	},
	{
		amount: 1090,
		sender: "ASDASDB4CEE9C0E5CD571",
		recipient: "23321A3F6E462D48E9",
	},
];

const nonce = 1100;

Ojie_SEN_22_7762.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(
	"\n\nThis is our hash data \n\n",
	Ojie_SEN_22_7762.hashBlock(previousBlockHash, currentBlockData, nonce),
	"\n\n"
);
