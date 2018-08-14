![Travis](https://travis-ci.org/cryptape/cita-observables.svg?branch=develop)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/@nervos/observables)
[![MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/cryptape/cita-observables)
[![AppChain](https://img.shields.io/badge/made%20for-Nervos%20AppChain-blue.svg)](https://appchain.nervos.org/)

# CITA-Observables

Observable based [CITA RPC](https://cryptape.github.io/cita/usage-guide/rpc/) toolkit

# Features

- Supports Observable API

# Installing

```bash
$ yarn add @cita/observables
```

# Example

```javascript
import CITAObservables from 'cita-observables'

const SERVER = 'localhost:1337'
const INTERVAL = 10
const RESERVED_RECORDS = 10

const citaObservables = new CITAObservables({
  server: SERVER,
  interval: INTERVAL,
  reservedRecords: RESERVED_RECORDS,
})

/**
 * @function peerCount
 * @description subscribe to the count of peer
 * @param {string} interval - interval of observable
 * @param {boolean} observed - switch of observable, default to true, observing the peerCount
 * @return {string} count - peer count
 */
citaObservables.peerCount(INTERVAL).subscribe(count => {
  console.log(count)
})

/**
 * @function newBlockNumber
 * @description subscribe to the latest block number
 * @param {string} interval - interval of observable
 * @param {boolean} observed - switch of observable, default to true, observing the new block number
 * @return {string} blockNumber - block number
 */
citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
  console.log(blockNumber)
})

/**
 * @function blockByNumber
 * @description request block by block number
 * @param {string} blockNumber
 * @return {object} block
 */
citaObservables.blockByNumber(blockNumber).subscribe(block => {
  console.log(block)
})

/**
 * @function newBlockByNumber
 * @description subscribe to lastest block
 * @param {string} interval - interval of observable
 * @param {boolean} observed - switch of observable, default to true, observing the new block
 * @return {object} block
 */
citaObservables.newBlockByNumber(INTERVAL).subscribe(block => {
  console.log(block)
})

/**
 * @function blockByHash
 * @description request block by block hash
 * @param {string} hash - block hash
 * @return {object} block
 */
citaObservables.blockByHash(HASH).subscribe(block => {
  console.log(block)
})

/**
 * @function sendSignedTransaction
 * @description send signed transaction
 * @param {string} signedTransaction - signed transaction
 * @return {object} result
 */
citaObservables.sendSignedTransaction(signedTransaction).subscribe(result => {
  console.log(result)
})

/**
 * @function newBlockByNumberSubject
 * @description subscribe to new block
 */
citaObservable.newBlockByNumberSubject.subscribe(console.log)
citaObservable.newBlockByNumberSubject.connect()
```
