'use strict';

// var utils = require('../../../components/utils');  //为什么不能这样引入。后期研究

var JsonML = require('jsonml.js/lib/utils');
var assign = require('object-assign');

function isObject(obj) {
  return Object.prototype.toString.apply(obj) === '[object Object]';
}

function copyjsx(node) {
  if (!JsonML.isElement(node)) return null;

  let bak;
  node.some((item) => {
    if (JsonML.isElement(item) && JsonML.getTagName(item) === 'pre' && isObject(item[1]) && item[1].lang === 'jsx') {
      bak = item.slice();
      return true;
    }
    return false;
  });

  if (!bak) return null;

  bak[1] = assign({}, bak[1]);
  bak[1].lang = 'javascript';

  return bak;
}

module.exports = (markdownData) => {
  const content = markdownData.content || [];

  markdownData.jscode = copyjsx(content);

  return markdownData;
};
