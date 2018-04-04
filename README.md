![Build Status](https://travis-ci.org/CITA-Toys/cita-observables.svg?branch=master)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/cita-web3-plugin)
[![npm type definitions](https://img.shields.io/npm/types/chalk.svg)](https://www.npmjs.com/package/cita-web3-plugin)
![npm](https://img.shields.io/npm/l/express.svg)

# CITA-Observables

Observable based [CITA RPC](https://cryptape.github.io/cita/usage-guide/rpc/) toolkit

# Features

* Supports Observable API

# Installing

```bash
$ yarn add cita-observables
```

# Example

```javascript
const INTERVAL = 10
/**
 * @function peerCount
 * @description subscribe to the count of peer
 * @param {string} interval - interval of observable
 * @return {string} count - peer count
 */
citaObservables.peerCount(INTERVAL).subscribe(count => {
  console.log(count)
})

/**
 * @function newBlockNumber
 * @description subscribe to the latest block number
 * @param {string} interval - interval of observable
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
```
