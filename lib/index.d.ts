/// <reference path="../typings/index.d.ts" />
import { Observable, ConnectableObservable } from '@reactivex/rxjs';
import { CITA, Transaction } from '@cita/web3-plugin';
import { JSONRPCError } from '@cita/web3-plugin/lib/index.d';
export default class CITAObservables {
    server: ServerAddr;
    interval: CITAInterval;
    CitaWeb3: CITA;
    newBlockByNumberSubject: ConnectableObservable<any>;
    constructor({server, interval, reservedRecords}: {
        server: ServerAddr;
        interval?: CITAInterval;
        reservedRecords?: ReservedRecords;
    });
    setServer: (server: string) => void;
    newBlockNumber: (interval?: number, observed?: boolean) => Observable<any>;
    blockByNumber: (blockNumber: string) => Observable<JSONRPCResult>;
    blockByHash: (blockHash: string) => Observable<JSONRPCResult>;
    newBlockByNumber: (interval?: number, observed?: boolean) => Observable<JSONRPCResult>;
    peerCount: (interval?: number, observed?: boolean) => Observable<string | object | Transaction | JSONRPCError>;
    sendTransaction: (signedData: any) => Observable<string | object | Transaction | JSONRPCError>;
    blockHistory: (params: {
        by: string;
        count: number;
    }) => Observable<JSONRPCResult[]>;
    getLogs: ({ topics, fromBlock, }: {
        topics: string[];
        fromBlock: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
    ethCall: (params: {
        from: string;
        to: string;
        data: string;
        blockNumber: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
    getTransaction: (hash: string) => Observable<Transaction>;
    getTransactionCount: (params: {
        accountAddr: string;
        blockNumber: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
    getCode: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
    getAbi: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
    getTransactionProof: (hash: string) => Observable<string | object | Transaction | JSONRPCError>;
    metaData: ({ blockNumber }: {
        blockNumber: string;
    }) => Observable<string | object | Transaction | JSONRPCError>;
}
