/// <reference path="../typings/index.d.ts" />
import { Observable, ConnectableObservable } from '@reactivex/rxjs';
import { CITA } from '@cita/web3-plugin';
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
    blockByNumber: (blockNumber: string) => Observable<string | object | JSONRPCError>;
    blockByHash: (blockHash: string) => Observable<string | object | JSONRPCError>;
    newBlockByNumber: (interval?: number, observed?: boolean) => Observable<string | object | JSONRPCError>;
    peerCount: (interval?: number, observed?: boolean) => Observable<string | object | JSONRPCError>;
    sendTransaction: (signedData: any) => Observable<string | object | JSONRPCError>;
    blockHistory: (params: {
        by: string;
        count: number;
    }) => Observable<(string | object | JSONRPCError)[]>;
    getLogs: ({ topics, fromBlock, }: {
        topics: string[];
        fromBlock: string;
    }) => Observable<string | object | JSONRPCError>;
    ethCall: (params: {
        from: string;
        to: string;
        data: string;
        blockNumber: string;
    }) => Observable<string | object | JSONRPCError>;
    getTransaction: (hash: string) => Observable<string | object | JSONRPCError>;
    getTransactionCount: (params: {
        accountAddr: string;
        blockNumber: string;
    }) => Observable<string | object | JSONRPCError>;
    getCode: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string | object | JSONRPCError>;
    getAbi: (params: {
        contractAddr: string;
        blockNumber: string;
    }) => Observable<string | object | JSONRPCError>;
    getTransactionProof: (hash: string) => Observable<string | object | JSONRPCError>;
}
