const { default: NervosObservables } = require('../lib')

const SERVER = '121.196.200.225:1337'
const INTERVAL = 10
const RESERVED_RECORDS = 10

const nervosObservables = new NervosObservables({
  server: SERVER,
  interval: INTERVAL,
  reservedRecords: RESERVED_RECORDS,
})

test('request peer count', () => {
  nervosObservables.peerCount(INTERVAL).subscribe(count => {
    expect(count.startsWith('0x')).toBeTruthy()
  })
})

test('request new block number', () => {
  nervosObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    expect.assertions(1)
    expect(blockNumber.startsWith('0x')).toBeTruthy()
  })
})

test.skip('request block by number of earliest', () => {
  nervosObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    nervosObservables.blockByNumber(blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request block by number of latest', () => {
  nervosObservables.blockByNumber('latest').subscribe(block => {
    expect.assertions(1)
    expect(block.header.number.startsWith('0x')).toBeTruthy()
  })
})

test('request block by number of hash', () => {
  nervosObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    nervosObservables.blockByNumber(blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request block by number of integer', () => {
  nervosObservables.newBlockNumber(INTERVAL).subscribe(blockNumber => {
    nervosObservables.blockByNumber(+blockNumber).subscribe(block => {
      expect.assertions(1)
      expect(block.header.number).toBe(blockNumber)
    })
  })
})

test('request new block by number', () => {
  nervosObservables.newBlockByNumber(INTERVAL).subscribe(block => {
    expect.assertions(1)
    expect(block.startsWith('0x')).toBeTruthy()
  })
})

test('request block by hash', () => {
  const HASH =
    '0xa4fa53748ccb4c2009e1655772622f89cceea55d1bd1fb7cc49fc5fb41567c4d'
  nervosObservables.blockByHash(HASH).subscribe(block => {
    expect.assertions(1)
    expect(block.hash).toBe(HASH)
  })
})

test('get meta data', () => {
  nervosObservables
    .metaData({
      blockNumber: '0x0',
    })
    .subscribe(metaData => {
      expect.assertions(1)
      expect(metaData.chainId).toBeTruthy()
    })
})

test.skip("get balance of ${'0x627306090abaB3A6e1400e9345bC60c78a8BEf57'}", () => {
  nervosObservables
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
