'use strict'

var weights = [ 20, 50, 30 ],
    result  = [ 0, 0, 0 ],
    random  = require('./')(weights)

for (var i = 0; i < 1000; i++)
    result[ random() ]++

console.log(result)
