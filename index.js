/* Weighted Random Generator
 * Generates a random array index by given weight scores
 * Based on Brandon Mills' weighted-random package (https://github.com/btmills/weighted-random)
 */

'use strict'

module.exports = createRandomGeneratorFunction

var assert  = require('assert'),
    message = 'weights must be an array of non-negative numbers'

function createRandomGeneratorFunction(weights) {
    assert(Array.isArray(weights), message)

    var totalWeight = 0,
        length = weights.length,
        i = length

    while (i--) {
        var current = weights[ i ]
        assert(current >= 0, message)
        totalWeight += current
    }

    return function random() {
        var i = length,
            n = Math.random() * totalWeight

        while (i--) {
            var current = weights[ i ]

            if (n < current)
                return i

            n -= current
        }

        return -1
    }
}
