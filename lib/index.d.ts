/// <reference path="../typings/index.d.ts" />
import { Observable, ConnectableObservable } from '@reactivex/rxjs';
import { Nervos } from '@nervos/web3-plugin';
import { Chain, RpcResult } from '@nervos/web3-plugin/lib/typings/index.d';
export default class NervosObservables {
    server: ServerAddr;
    interval: CITAInterval;
    NervosWeb3: Nervos;
    newBlockByNumberSubject: ConnectableObservable<any>;
    constructor({server, interval, reservedRecords}: {
        server: ServerAddr;
        interval?: CITAInterval;
        reservedRecords?: ReservedRecords;
    });
    setServer: (server: string) => void;
    newBlockNumber: (interval?: number, observed?: boolean) => Observable<any>;
    blockByNumber: (blockNumber: string) => Observable<RpcResult.Result>;
    blockByHash: (blockHash: string) => Observable<RpcResult.Result>;
    newBlockByNumber: (interval?: number, observed?: boolean) => Observable<any>;
    peerCount: (interval?: number, observed?: boolean) => Observable<string>;
    sendSignedTransaction: (signedData: any) => Observable<RpcResult.sendRawTransaction>;
    blockHistory: (params: {
        by: string;
        count: number;
    }) => Observable<Chain.Block<Chain.TransactionInBlock>[]>;
    getLogs: ({ topics, fromBlock, }: {
        topics: string[];
        fromBlock: string;
    }) => Observable<Chain.Log[]>;
    ethCall: (params: {
        callObject: {
            from?: string;
            to: string;
            data: string;
        };
        blockNumber: string;
    }) => Observable<RpcResult.Result>;
    getTransaction: (hash: string) => Observable<Chain.TransactionInBlock>;
    getTransactionCount: (params: {
        addr: string;
        blockNumber: string;
    }) => Observable<string>;
    getCode: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string>;
    getAbi: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string>;
    getTransactionProof: (hash: string) => Observable<string>;
    metaData: ({ blockNumber }: {
        blockNumber: string;
    }) => Observable<Chain.MetaData>;
    getBalance: ({ addr, blockNumber, }: {
        addr: string;
        blockNumber: string;
    }) => Observable<string>;
}
