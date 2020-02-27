// regex explained: https://regexr.com/4v6iu
const trimEnd = (str, c = '\\s') => str.replace(new RegExp(`^(.*?)([${c}]*)$`), '$1')

exports.simple = trimEnd(' abc ')
// => ' abc'

exports.custom = trimEnd('-_-abc-_-', '_-')
// => '-_-abc'
