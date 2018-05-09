const { default: CITAObservables } = require('../lib')

const SERVER = 'http://47.75.129.215:1337'
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

test.skip('request block by number of earliest', () => {
  citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    citaObservables.blockByNumber(blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request block by number of latest', () => {
  citaObservables.blockByNumber('latest').subscribe(block => {
    expect.assertions(1)
    expect(block.header.number.startsWith('0x')).toBeTruthy()
  })
})

test('request block by number of hash', () => {
  citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    citaObservables.blockByNumber(blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request block by number of integer', () => {
  citaObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    citaObservables.blockByNumber(+blockNumber).subscribe(block => {
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

test('get meta data', () => {
  citaObservables
    .metaData({
      blockNumber: '0x0',
    })
    .subscribe(metaData => {
      expect.assertions(1)
      expect(metaData.chainId).toBeTruthy()
    })
})

test.skip("get balance of ${'0x627306090abaB3A6e1400e9345bC60c78a8BEf57'}", () => {
  citaObservables
    .getBalance({
      addr: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
    })
    .subscribe(balance => {
      expect.assertion(1)
      expect(balance.startsWith('0x')).toBeTruthy()
    })
})

//TODO: sendTransaction
// TODO: rest observables

// test('request block history', () => {
//TODO:
// })
