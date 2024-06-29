const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

let block = bitcoin.getLastBlock();
console.log(block.nonce);
let nonce = block.nonce;
let previousBlockHash = block.hash;
let hash = bitcoin.hashBlock(previousBlockHash, bitcoin.pendingTransactions, nonce);
console.log(nonce);
console.log(previousBlockHash);
console.log(hash);


bitcoin.createNewTransaction(100, 'ALEXHT', 'JENNIFERLAWRENCE');
block = bitcoin.getLastBlock();
nonce = block.nonce;
previousBlockHash = block.hash;
hash = bitcoin.hashBlock(previousBlockHash, bitcoin.pendingTransactions, nonce);
bitcoin.createNewBlock(nonce, previousBlockHash, hash);
block = bitcoin.getLastBlock();
nonce = block.nonce;
previousBlockHash = block.hash;
hash = bitcoin.hashBlock(previousBlockHash, bitcoin.pendingTransactions, nonce);
bitcoin.createNewBlock(nonce, previousBlockHash, hash);
block = bitcoin.getLastBlock();
nonce = block.nonce;
previousBlockHash = block.hash;
hash = bitcoin.hashBlock(previousBlockHash, bitcoin.pendingTransactions, nonce);

console.log(bitcoin);

console.log(bitcoin.hashBlock(previousBlockHash, bitcoin.pendingTransactions, 78007));