module.exports = [1, [2, [3, [4]], 5]].reduce((a, b) => a.concat(b), [])
// => [1, 2, [3, [4]], 5]
