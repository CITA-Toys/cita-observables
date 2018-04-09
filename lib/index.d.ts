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
    newBlockNumber: (interval?: number, observed?: boolean) => Observable<any>;
    blockByNumber: (blockNumber: string) => Observable<string | object | JSONRPCError>;
    blockByHash: (blockHash: string) => Observable<string | object | JSONRPCError>;
    newBlockByNumber: (interval?: number, observed?: boolean) => Observable<string | object | JSONRPCError>;
    peerCount: (interval?: number, observed?: boolean) => Observable<string | object | JSONRPCError>;
    sendTransaction: (signedData: any) => Observable<string | object | JSONRPCError>;
    blockHistory: ({ by, count }: {
        by: string;
        count: number;
    }) => Observable<(string | object | JSONRPCError)[]>;
}
