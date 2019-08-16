module.exports = decode

function decode (hex) {
  var i = 0, c = 0, l, u8a = new Uint8Array((l = hex.length) / 2)
  for (; c < l; c += 2) u8a[i++] = parseInt(hex.substr(c, 2), 16)
  return u8a
}
