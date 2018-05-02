"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("@reactivex/rxjs");
const web3_plugin_1 = __importDefault(require("@cita/web3-plugin"));
class CITAObservables {
    constructor({ server, interval = 1000, reservedRecords = 10, }) {
        this.setServer = (server) => {
            this.server = server;
            const Web3Ins = web3_plugin_1.default({ server });
            this.CitaWeb3 = Web3Ins.CITA;
        };
        this.newBlockNumber = (interval = this.interval, observed = true) => observed
            ? rxjs_1.Observable.interval(interval)
                .startWith(0)
                .switchMap(() => this.CitaWeb3.getBlockNumber())
                .distinct()
            : rxjs_1.Observable.fromPromise(this.CitaWeb3.getBlockNumber());
        this.blockByNumber = (blockNumber) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getBlockByNumber({
            quantity: blockNumber,
            detailed: true,
        }));
        this.blockByHash = (blockHash) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getBlockByHash({
            hash: blockHash,
            detailed: true,
        }));
        this.newBlockByNumber = (interval = this.interval, observed = true) => this.newBlockNumber(interval, observed).switchMap(blockNumber => {
            if (typeof blockNumber === 'string') {
                return this.blockByNumber(blockNumber);
            }
            return rxjs_1.Observable.of(new Error('Invalid BlockNumber'));
        });
        this.peerCount = (interval = this.interval, observed = true) => observed
            ? rxjs_1.Observable.interval(interval)
                .startWith(0)
                .switchMap(() => this.CitaWeb3.netPeerCount())
            : rxjs_1.Observable.fromPromise(this.CitaWeb3.netPeerCount());
        this.sendTransaction = signedData => rxjs_1.Observable.fromPromise(this.CitaWeb3.sendTransaction(signedData));
        this.blockHistory = (params) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getBlockHistory(params));
        this.getLogs = ({ topics = [], fromBlock = '0x0', }) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getLogs({
            topics,
            fromBlock,
        }));
        this.ethCall = (params) => rxjs_1.Observable.fromPromise(this.CitaWeb3.ethCall(params));
        this.getTransaction = (hash) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getTransaction(hash));
        this.getTransactionCount = (params) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getTransactionCount(params));
        this.getCode = (params) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getCode(params));
        this.getAbi = (params) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getAbi({
            addr: params.contractAddr,
            blockNumber: params.blockNumber,
        }));
        this.getTransactionProof = (hash) => rxjs_1.Observable.fromPromise(this.CitaWeb3.getTransactionProof(hash));
        this.metaData = ({ blockNumber }) => rxjs_1.Observable.fromPromise(this.CitaWeb3.metaData({ blockNumber }));
        this.interval = interval;
        this.setServer(server);
        const newBlockByNumberSubject = new rxjs_1.ReplaySubject(reservedRecords);
        this.newBlockByNumberSubject = this.newBlockByNumber(interval || this.interval).multicast(newBlockByNumberSubject);
    }
}
exports.default = CITAObservables;
