module.exports = decode

function decode (str) {
  var i = 0, o = 0, arr = []
  for (; o < str.length; o += 2) arr[i++] = (
    parseInt(str.substr(o, 2), 16)
  )
  return arr
}
