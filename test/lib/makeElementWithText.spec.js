'use strict';

var test = require('tape');
var makeElementWithText = require('../../lib/makeElementWithText');

test('it is a function', t => {
  t.equals(typeof makeElementWithText, 'function');
  t.end();
});
