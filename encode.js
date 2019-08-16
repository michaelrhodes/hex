module.exports = encode

function encode (buf) {
  var hex = '', u8a = new Uint8Array(buf)
  for (var b, i = 0, l = u8a.length; i < l; i++)
    hex += ((b = u8a[i]) >>> 4).toString(16),
    hex += (b & 0x0f).toString(16)
  return hex
}
