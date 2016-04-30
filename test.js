var names = require('./index.min.js');
var assert = require('assert');

assert.deepEqual(names["Black"], "000000");
assert.deepEqual(names["000000"], "Black");
assert.deepEqual(names["Alice Blue"], "F0F8FF");
assert.deepEqual(names["F0F8FF"], "Alice Blue");