# unique-number [![NPM Version][npm-image]][npm-url] [![Bower Version][bower-image]][bower-url] [![Build Status][travis-image]][travis-url]

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


[npm-image]: https://img.shields.io/npm/v/unique-number.svg
[npm-url]: https://npmjs.org/package/unique-number
[bower-image]: https://img.shields.io/bower/v/unique-number.svg
[bower-url]: https://github.com/stevenvachon/unique-number
[travis-image]: https://img.shields.io/travis/stevenvachon/unique-number.svg
[travis-url]: https://travis-ci.org/stevenvachon/unique-number
