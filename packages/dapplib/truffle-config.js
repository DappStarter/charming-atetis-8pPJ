require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain company grace person fresh gather'; 
let testAccounts = [
"0x050e8cc36c058fabf44c33bc75527eb7fff346038461260e8ff9a6f64581b437",
"0x31e43289a1cfc97c64be0cf3c428734381b85cd238fbd6cf438f15f868e4ee1a",
"0x813e22eba6a09dbeb78cdaa0aeb627839dc850a69f062d82b2d0897c48458609",
"0x62d72b0979c23cf604a3d478d060228b6afaeb6d42abef6ac374a5d32ef25c17",
"0x46fd880c406c9ad3828b96e6034c971d9c9e0080c9120ae2359298d4906e1d70",
"0x8db3d6c494ec49d01a1c31f82e046c3eb1d17b99e5a94aef71dc4048c9952ab2",
"0xe8d22808537df740cfa4f1095c5d0393b0dff8a509907287ac0f0974eb2e6e0c",
"0x9733ba687092ce309760a5d645c88e80c58b540063c508833eb4600df3cc29dd",
"0x802cc22c9736175d2783a4be18e99ce2ef78e07d49af0404ed7e01f52d95861e",
"0x4901393d6f7ec49976658c9ae59462543976b4decd7f2d036f2728540583db72"
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

