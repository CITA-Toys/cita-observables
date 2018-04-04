const { default: CITAObservables } = require('../lib')

const SERVER = '39.104.94.244:1301'
const INTERVAL = 10
const RESERVED_RECORDS = 10

const citaObservables = new CITAObservables({
  server: SERVER,
  interval: INTERVAL,
  reservedRecords: RESERVED_RECORDS,
})

test('request peer count', () => {
  citaObservables.peerCount(INTERVAL).subscribe(count => {
    expect(count.startsWith('0x')).toBeTruthy()
  })
})

test('request new block number', () => {
  citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    expect.assertions(1)
    expect(blockNumber.startsWith('0x')).toBeTruthy()
  })
})

test('request block by number', () => {
  citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    citaObservables.blockByNumber(blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request new block by number', () => {
  citaObservables.newBlockByNumber(INTERVAL).subscribe(block => {
    expect.assertions(1)
    expect(block.startsWith('0x')).toBeTruthy()
  })
})

test('request block by hash', () => {
  const HASH =
    '0xa4fa53748ccb4c2009e1655772622f89cceea55d1bd1fb7cc49fc5fb41567c4d'
  citaObservables.blockByHash(HASH).subscribe(block => {
    expect.assertions(1)
    expect(block.hash).toBe(HASH)
  })
})

//TODO: sendTransaction
