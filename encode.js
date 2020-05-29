module.exports = encode

var hex = '0123456789abcdef'

function encode (arr) {
  var i = 0, str = ''
  for (; i < arr.length; i++) str += (
    hex[arr[i] >>> 4] +
    hex[arr[i] & 0xf]
  )
  return str
}
