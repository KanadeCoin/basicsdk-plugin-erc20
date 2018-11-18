//
// KanadeCoinBasicSDK ERC20 Plugin
// https://kanadecoin.com/
//
// Copyright 2018 monolitht
// MIT license
//

Kanade.plugins.erc20 = {};

Kanade.plugins.erc20.KNDC = {};
Kanade.plugins.erc20.KNDC.contractAddress = Kanade.contractAddress;
Kanade.plugins.erc20.KNDC.ABI = Kanade.ABI;

// ERC20トークンのコントラクトが使えるように設定する
Kanade.plugins.erc20.setContractAddr = function(contractAddr) {
    // 一旦切断する
    Kanade.disconnect();
    // ERC20トークンのコントラクトが使えるように設定
    Kanade.contractAddress = contractAddr;
    Kanade.ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
};

// KanadeCoinが使えるように設定を戻す
Kanade.plugins.erc20.setKanadeContractAddr = function(contractAddr) {
    // 一旦切断する
    Kanade.disconnect();
    // KanadeCoinのコントラクトが使えるように設定
    Kanade.contractAddress = Kanade.plugins.erc20.KNDC.contractAddress;
    Kanade.ABI = Kanade.plugins.erc20.KNDC.ABI;
};
