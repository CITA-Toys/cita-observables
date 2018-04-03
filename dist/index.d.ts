import { Observable, ReplaySubject } from '@reactivex/rxjs';
export default class CITAObservables {
    server: string;
    interval: string | number;
    CitaWeb3: any;
    constructor({server, interval}: {
        server: string;
        interval?: string | number;
    });
    newBlockNumber$: (interval: any) => Observable<{}>;
    blockByNumber$: (blockNumber: string) => Observable<{}>;
    blockByHash$: (blockHash: string) => Observable<{}>;
    newBlockByNumber$: (interval: any) => Observable<{}>;
    peerCount$: (interval: any) => Observable<{}>;
    multicastedNewBlockByNumber$: (interval: any) => ReplaySubject<{}>;
    sendTransaction$: (signedData: any) => Observable<{}>;
}
