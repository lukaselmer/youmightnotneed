const expected = [2, 3]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('findIndex', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})