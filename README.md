# unique-number [![NPM Version](https://badge.fury.io/js/unique-number.svg)](https://badge.fury.io/js/unique-number) [![Bower Version](https://badge.fury.io/bo/unique-number.svg)](https://badge.fury.io/bo/unique-number) [![Build Status](https://secure.travis-ci.org/stevenvachon/unique-number.svg)](https://travis-ci.org/stevenvachon/unique-number)
> Generate a unique number.

Basically, a simple iterator/counter. Optionally, use timestamps.

After many generations—typically when your operations are complete—it'd be a good idea to run `reset()` to avoid going beyond [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

```js
var UniqueNumber = require("unique-number");

var uniqueNumber = new UniqueNumber();

console.log( uniqueNumber.generate() ); //-> 0
console.log( uniqueNumber.generate() ); //-> 1

uniqueNumber.reset();

console.log( uniqueNumber.generate() ); //-> 0
```

Timestamps:
```js
var uniqueNumber = new UniqueNumber(true);

console.log( uniqueNumber.generate() );     //-> 1430000000000
console.log( uniqueNumber.generate() );     //-> 1430000000001
console.log( uniqueNumber.generate() );     //-> 1430000000002

uniqueNumber.reset();

console.log( uniqueNumber.generate() );     //-> 1430000000000

setTimeout( function() {
	console.log( uniqueNumber.generate() ); //-> 1430000000100
}, 100);
```

Shortcut syntax:
```js
var uniqueNumber = require("unique-number")();
```

When using timestamps, the value is simply iterated when multiple requests are made per millisecond.

## Notice
This library does not attempt to go beyond its simple design. If you need something more elaborate, check out [cuid](https://npmjs.com/cuid), [puid](https://npmjs.com/puid) or [shortid](https://npmjs.com/shortid).
