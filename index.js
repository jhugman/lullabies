'use strict';

var makeElementWithText = require('lib/makeElementWithText');
var h1 =makeElementWithText('h1', 'Hello, world!');

document.body.appendChild(h1);
