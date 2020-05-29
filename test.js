var encode = require('./encode')
var decode = require('./decode')
var assert = console.assert

assert(eq(encode([255, 128, 255]), 'ff80ff'), 'encode')
assert(eq(decode('ff80ff'), [255, 128, 255]), 'decode')

function eq (a, b) {
  if (a === b) return true
  if (a.length !== b.length) return false
  for (var i = 0, l = a.length; i < l; i++)
    if (a[i] !== b[i])
      return false
  return true
}
