[![view on npm](http://img.shields.io/npm/v/wrg.svg?style=flat-square)](https://www.npmjs.com/package/wrg)
[![downloads per month](http://img.shields.io/npm/dm/wrg.svg?style=flat-square)](https://www.npmjs.com/package/wrg)
[![node version](https://img.shields.io/badge/node-%3E=0.8-brightgreen.svg?style=flat-square)](https://nodejs.org/download)
[![build status](https://img.shields.io/travis/schwarzkopfb/wrg.svg?style=flat-square)](https://travis-ci.org/schwarzkopfb/wrg)
[![test coverage](https://img.shields.io/coveralls/schwarzkopfb/wrg.svg?style=flat-square)](https://coveralls.io/github/schwarzkopfb/wrg)
[![license](https://img.shields.io/npm/l/wrg.svg?style=flat-square)](https://github.com/schwarzkopfb/wrg/blob/master/LICENSE)

# Weighted Random Generator

Generate random array indices weighted by given scores. Optimized for use-cases when weights are rarely or never changing.

## Usage

The package exposes a factory function which takes an array of weight scores and returns the random generator function.

```js
const wrg = require('wrg'),
      random = wrg([ 2, 5, 3 ]),
      results = [ 0, 0, 0 ]
      
for (let i = 0; i < 1000; i++)
    results[ random() ]++
    
console.log(results)
```

The result will be similar to the following:

```
[ 197, 488, 315 ]
```

## Installation

With npm:

    npm install wrg

## Tests & benchmarks

Run unit tests:

    npm test

Run unit tests and create coverage report:

    npm run cover

Run benchmark:

    npm run benchmark

## License

[MIT](/LICENSE)

## Credits

This is an optimised version of Brandon Mills' [weighted-random](https://github.com/btmills/weighted-random) package.
 