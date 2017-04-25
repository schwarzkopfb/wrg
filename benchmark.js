'use strict'

var weights = [ 1, 1.321, 5, 2 ],
    weightedRandom = require('weighted-random'),
    wrg = require('./')(weights)

exports.compare = {
    'weighted-random': function () {
        weightedRandom(weights)
    },

    'wrg': function () {
        wrg()
    }
}

require('bench').runMain()
