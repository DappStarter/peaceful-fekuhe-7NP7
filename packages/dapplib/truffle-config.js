require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain smile hidden prize bone ghost'; 
let testAccounts = [
"0x8cc76aea66c331610b27fec2fff86503cafd1038c5b7832b17befa3a856c65a7",
"0xd526d2ac4d439a6d9b923f4b89d22a7d43224c9907b70ece4ca94e078c3bc6ce",
"0xc63e9afa71b0b1e19fec50a99503545de7463adc4ca05c866afeb65bcf39d316",
"0x6f90de0b5178f81ca3ad90d5ab278e1297c50098b8875ed2a66cf349babc2dde",
"0xc9a14458bc60c58e24ed626fff6d13971724d2dc3ac3e551891178fe77329bab",
"0xd36d653bb796dfab71a89e98d7efe5be3cfc93c6b9a3c6d59895da22ed93f5b3",
"0x591185cfc83ebea577dc1ff408ad97a51301f4c7e799c472ba64f66365467a76",
"0x371d24a687093ce4ac7bdb28a20fd6992e4205c3bc3ce7e0e3a5ceb1c02b843b",
"0x52bbd0206d0fbc0d594df38bde1fcfa9142b568d0ac5e4217193f944a00dea98",
"0xa9738abfd90480561d32ea0a7212c280420cc620794178fb2dbed6d5f80781ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

