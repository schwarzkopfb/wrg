/* Weighted Random Generator
 * Generates a random array index by given weight scores
 * Based on Brandon Mills' weighted-random package (https://github.com/btmills/weighted-random)
 */

'use strict'

module.exports = createRandomGeneratorFunction

var assert  = require('assert'),
    message = 'weights must be an array of positive numbers'

function createRandomGeneratorFunction(weights) {
    assert(Array.isArray(weights), message)

    var totalWeight = 0

    for (var i = weights.length; i--;) {
        var current = weights[i]

        assert(current >= 0, message)

        totalWeight += current
    }

    return function () {
        var n = Math.random() * totalWeight

        for (var i = 0; i < weights.length; i++) {
            var current = weights[ i ]

            if (n < current)
                return i

            n -= current
        }

        return -1
    }
}
