# unique-number [![NPM Version](https://badge.fury.io/js/unique-number.svg)](https://badge.fury.io/js/unique-number) [![Bower Version](https://badge.fury.io/bo/unique-number.svg)](https://badge.fury.io/bo/unique-number) [![Build Status](https://secure.travis-ci.org/stevenvachon/unique-number.svg)](https://travis-ci.org/stevenvachon/unique-number)
> Generate a unique number.

```js
var uniqueNumber = require("unique-number");

// Timestamp
console.log( uniqueNumber() );

// Iterated timestamps
for (var i=0; i<1000; i++) {
	console.log( uniqueNumber() );
}

// Resets timestamp+1000 back to timestamp
uniqueNumber.reset();

setTimeout( function() {
	console.log( uniqueNumber() );
}, 100);
```

When multiple requests are made per millisecond, the timestamp is simply iterated. After a few billion runs—typically when your operations are complete—you should run `uniqueNumber.reset()` to avoid passing [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

Because this library is so small and simple, it requires this one extra step. If you disapprove, you may prefer [cuid](https://npmjs.com/cuid), [puid](https://npmjs.com/puid) or [shortid](https://npmjs.com/shortid).
