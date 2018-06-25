/// <reference path="../typings/index.d.ts" />
import { Observable, ConnectableObservable } from '@reactivex/rxjs';
import { CITA } from '@nervos/web3-plugin';
export default class NervosObservables {
    server: ServerAddr;
    interval: CITAInterval;
    NervosWeb3: CITA;
    newBlockByNumberSubject: ConnectableObservable<any>;
    constructor({server, interval, reservedRecords}: {
        server: ServerAddr;
        interval?: CITAInterval;
        reservedRecords?: ReservedRecords;
    });
    setServer: (server: string) => void;
    newBlockNumber: (interval?: number, observed?: boolean) => Observable<any>;
    blockByNumber: (blockNumber: any) => Observable<{}>;
    blockByHash: (blockHash: string) => Observable<{}>;
    newBlockByNumber: (interval?: number, observed?: boolean) => Observable<{}>;
    peerCount: (interval?: number, observed?: boolean) => Observable<{}>;
    sendTransaction: (signedData: any) => Observable<{}>;
    blockHistory: (params: {
        by: any;
        count: number;
    }) => Observable<{}>;
    getLogs: ({ topics, fromBlock, }: {
        topics: any[];
        fromBlock: any;
    }) => Observable<{}>;
    ethCall: (params: {
        from: any;
        to: any;
        data: string;
        blockNumber: any;
    }) => Observable<{}>;
    getTransaction: (hash: any) => Observable<{}>;
    getTransactionCount: (params: {
        addr: any;
        blockNumber: any;
    }) => Observable<{}>;
    getCode: (params: {
        contractAddr: any;
        blockNumber: any;
    }) => Observable<{}>;
    getAbi: (params: {
        contractAddr: any;
        blockNumber: any;
    }) => Observable<{}>;
    getTransactionProof: (hash: any) => Observable<{}>;
    metaData: ({ blockNumber }: {
        blockNumber: any;
    }) => Observable<{}>;
    getBalance: ({ addr, blockNumber, }: {
        addr: any;
        blockNumber: any;
    }) => Observable<{}>;
}
