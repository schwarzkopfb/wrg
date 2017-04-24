'use strict'

var test = require('tap'),
    init = require('./')

function randomWeights(length) {
    var weights = new Array(length);
    var i;

    for (i = 0; i < length; i++) {
        weights[i] = Math.random() / Math.random(); // Occasionally > 1
    }

    return weights;
}

test.equal(init([])(), -1, 'given an empty list, it should return -1')
test.equal(init([ 0, 0 ])(), -1, 'given no weights, it should return -1')
test.equal(init([ 1 ])(), 0, 'given a single weight, it should return 0')

test.test('given uneven weights', function(test) {
    test.equal(init([ 1, 0 ])(), 0, "should return the greater weight's index")
    test.equal(init([ 0, 1 ])(), 1, "should return the greater weight's index")
    test.end()
})

test.test('given multiple weights', function (test) {
    test.test('should always return an integer', function (test) {
        var result, weights = randomWeights(10)

        for (var i = 0; i < 100; i++) {
            result = init(weights)()
            test.ok(result % 1 === 0)
        }

        test.end()
    })

    test.test('should return an index within bounds', function (test) {
        var weights = randomWeights(10)

        for (var i = 0; i < 100; i++) {
            var result = init(weights)()
            test.ok(result >= 0 && result < weights.length)
        }

        test.end()
    })

    test.end()
})

test.test('should not mutate weights', function (test) {
    var weights = randomWeights(10),
        copy    = weights.slice()

    init(weights)()
    test.same(weights, copy)

    test.end()
})
