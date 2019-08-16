# hex

[![build status](https://travis-ci.org/michaelrhodes/hex.svg?branch=master)](https://travis-ci.org/michaelrhodes/hex)

## install
```sh
npm install michaelrhodes/hex#1.0.0
```

## use
```js
var encode = require('hex/encode')
var decode = require('hex/decode')

encode([255, 128, 255])
> 'ff80ff'

encode(new Uint8Array([255, 128, 255]))
> 'ff80ff'

encode(new Uint8Array([255, 128, 255]).buffer)
> 'ff80ff'

decode('ff80ff')
> Uint8Array([255, 128, 255])
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
