"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("@reactivex/rxjs");
const web3_plugin_1 = __importDefault(require("@nervos/web3-plugin"));
class NervosObservables {
    constructor({ server, interval = 1000, reservedRecords = 10, }) {
        this.setServer = (server) => {
            this.server = server;
            const Web3Ins = web3_plugin_1.default({ server });
            this.NervosWeb3 = Web3Ins.Nervos;
        };
        this.newBlockNumber = (interval = this.interval, observed = true) => observed
            ? rxjs_1.Observable.interval(interval)
                .startWith(0)
                .switchMap(() => this.NervosWeb3.getBlockNumber())
                .distinct()
            : rxjs_1.Observable.fromPromise(this.NervosWeb3.getBlockNumber());
        this.blockByNumber = (blockNumber) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getBlockByNumber({
            quantity: blockNumber,
            txInfo: web3_plugin_1.BlockTransactionInfo.Detail,
        }));
        this.blockByHash = (blockHash) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getBlockByHash({
            hash: blockHash,
            txInfo: web3_plugin_1.BlockTransactionInfo.Detail,
        }));
        this.newBlockByNumber = (interval = this.interval, observed = true) => this.newBlockNumber(interval, observed).switchMap(blockNumber => {
            if (typeof blockNumber === 'string' || typeof blockNumber === 'number') {
                return this.blockByNumber(blockNumber);
            }
            return rxjs_1.Observable.of({
                code: -1,
                message: 'Invalid BlockNumber',
            });
        });
        this.peerCount = (interval = this.interval, observed = true) => observed
            ? rxjs_1.Observable.interval(interval)
                .startWith(0)
                .switchMap(() => this.NervosWeb3.netPeerCount())
            : rxjs_1.Observable.fromPromise(this.NervosWeb3.netPeerCount());
        this.sendSignedTransaction = signedData => rxjs_1.Observable.fromPromise(this.NervosWeb3.sendSignedTransaction(signedData));
        this.blockHistory = (params) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getBlockHistory(params));
        this.getLogs = ({ topics = [], fromBlock = '0x0', }) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getLogs({
            topics,
            fromBlock,
        }));
        this.ethCall = (params) => rxjs_1.Observable.fromPromise(this.NervosWeb3.ethCall(params));
        this.getTransaction = (hash) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getTransaction(hash));
        this.getTransactionCount = (params) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getTransactionCount(params));
        this.getCode = (params) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getCode(params));
        this.getAbi = (params) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getAbi({
            addr: params.contractAddr,
            blockNumber: params.blockNumber,
        }));
        this.getTransactionProof = (hash) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getTransactionProof(hash));
        this.metaData = ({ blockNumber }) => rxjs_1.Observable.fromPromise(this.NervosWeb3.metadata({ blockNumber: blockNumber }));
        this.getBalance = ({ addr, blockNumber = 'latest', }) => rxjs_1.Observable.fromPromise(this.NervosWeb3.getBalance({ addr, quantity: blockNumber }));
        this.interval = interval;
        this.setServer(server);
        const newBlockByNumberSubject = new rxjs_1.ReplaySubject(reservedRecords);
        this.newBlockByNumberSubject = this.newBlockByNumber(interval || this.interval).multicast(newBlockByNumberSubject);
    }
}
exports.default = NervosObservables;
