import { Observable } from '@reactivex/rxjs';
export declare const newBlockNumber$: Observable<{}>;
export declare const blockByNumber$: (blockNumber: string) => Observable<{}>;
export declare const blockByHash$: (blockHash: string) => Observable<{}>;
export declare const newBlockByNumber$: any;
export declare const peerCount$: Observable<{}>;
export declare const multicastedNewBlockByNumber$: any;
export declare const sendTransaction$: (signedData: any) => Observable<{}>;
export declare const signTx$: (privKey: string, data: string) => Observable<any>;
