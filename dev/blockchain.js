function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        previousBlockHash: previousBlockHash,
        hash: hash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);
    
    return newBlock;
}

/*class Blockchain { BURASI DA GAYET DÜZGÜN ÇALIŞACAKTIR. YUKARIDAKİ FUNCTİON İLE AYNI İŞİ YAPAR. TEK FARKI BUNUN CLASS OLMASI
    constructor() {
        this.chain = [];
        this.newTransactions = [];
    }
}*/