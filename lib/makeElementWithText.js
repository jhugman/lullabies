'use strict';

function makeElementWithText(tag, text) {
  var element = document.createElement(tag);

  element.textContent = text;

  return element;
}

module.exports = makeElementWithText;
