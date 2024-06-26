const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        previousBlockHash: previousBlockHash,
        hash: hash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);
    
    return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, receipent) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        receipent: receipent
    }

    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

module.exports = Blockchain;

/*class Blockchain { BURASI DA GAYET DÜZGÜN ÇALIŞACAKTIR. YUKARIDAKİ FUNCTİON İLE AYNI İŞİ YAPAR. TEK FARKI BUNUN CLASS OLMASI
    constructor() {
        this.chain = [];
        this.newTransactions = [];
    }
}*/