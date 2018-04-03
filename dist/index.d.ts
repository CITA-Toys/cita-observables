import { Observable, ConnectableObservable } from '@reactivex/rxjs';
export declare type CITAInterval = number;
export declare type BlockNumber = number;
export declare type ServerAddr = string;
export declare type BlockHash = string;
export default class CITAObservables {
    server: ServerAddr;
    interval: CITAInterval;
    CitaWeb3: any;
    newBlockByNumberSubject: ConnectableObservable<any>;
    constructor({server, interval}: {
        server: ServerAddr;
        interval?: CITAInterval;
    });
    newBlockNumber: (interval: number) => Observable<{}>;
    blockByNumber: (blockNumber: number) => Observable<{}>;
    blockByHash: (blockHash: string) => Observable<{}>;
    newBlockByNumber$: (interval: number) => Observable<{}>;
    peerCount: (interval: number) => Observable<{}>;
    sendTransaction$: (signedData: any) => Observable<{}>;
}
