"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("@reactivex/rxjs");
var cita_web3_plugin_1 = __importDefault(require("cita-web3-plugin"));
var Web3Ins = cita_web3_plugin_1.default();
var CitaWeb3 = Web3Ins.CITA;
var INTERVAL = process.env.NODE_ENV === 'production' ? 1000 : 10000;
exports.newBlockNumber$ = rxjs_1.Observable.interval(INTERVAL).switchMap(function () {
    return CitaWeb3.getBlockNumber();
});
exports.blockByNumber$ = function (blockNumber) {
    return rxjs_1.Observable.fromPromise(CitaWeb3.getBlockByNumber({
        quantity: blockNumber,
        detailed: true,
    }));
};
exports.blockByHash$ = function (blockHash) {
    return rxjs_1.Observable.fromPromise(CitaWeb3.getBlockByHash({
        hash: blockHash,
        detailed: true,
    }));
};
exports.newBlockByNumber$ = exports.newBlockNumber$
    .distinct()
    .switchMap(exports.blockByNumber$);
exports.peerCount$ = rxjs_1.Observable.interval(INTERVAL).switchMap(function () {
    return CitaWeb3.netPeerCount();
});
var newBlockByNumberSubject = new rxjs_1.ReplaySubject(10);
exports.multicastedNewBlockByNumber$ = exports.newBlockByNumber$.multicast(newBlockByNumberSubject);
exports.sendTransaction$ = function (signedData) {
    return rxjs_1.Observable.fromPromise(CitaWeb3.sendTransaction(signedData));
};
exports.signTx$ = function (privKey, data) {
    return rxjs_1.Observable.of(Web3Ins.eth.sign(privKey, data));
};
