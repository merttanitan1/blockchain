const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = '54GS46E4GDGSAEGS6A';
const currentBlockData = [
    {
        amount: 10,
        sender: 'HG4SER8G64G8SGRSD8G',
        receipent: 'GEG4W6G4D5G1S65G'
    },
    {
        amount: 30,
        sender: '5FEW4FE6F9D1SF56EF48SE',
        receipent: 'G4SEGSDGSEGRS89GRDG'
    },
    {
        amount: 200,
        sender: '4FES4FFDSFE6SFGGDSGDSS',
        receipent: 'EWGFDFESSEFSEFFESFSVDSE'
    }
]
const nonce = 4324;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));