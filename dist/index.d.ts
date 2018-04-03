/// <reference path="../typings/index.d.ts" />
import { Observable, ConnectableObservable } from '@reactivex/rxjs';
import { CITA } from 'cita-web3-plugin';
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
    newBlockNumber: (interval: number) => Observable<string | object | JSONRPCError>;
    blockByNumber: (blockNumber: string) => Observable<string | object | JSONRPCError>;
    blockByHash: (blockHash: string) => Observable<string | object | JSONRPCError>;
    newBlockByNumber$: (interval: number) => Observable<string | object | JSONRPCError>;
    peerCount: (interval: number) => Observable<string | object | JSONRPCError>;
    sendTransaction$: (signedData: any) => Observable<string | object | JSONRPCError>;
}
