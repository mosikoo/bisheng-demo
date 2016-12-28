'use strict';

// var utils = require('../../../components/utils');  //为什么不能这样引入。后期研究

var JsonML = require('jsonml.js/lib/utils');
var assign = require('object-assign');

function isObject(obj) {
  return Object.prototype.toString.apply(obj) === '[object Object]';
}

function copyjsx(node) {
  if (!JsonML.isElement(node)) return;

  const indexArr = [];
  const bak = [];
  node.forEach((item, index) => {
    if (JsonML.isElement(item) && JsonML.getTagName(item) === 'pre' && isObject(item[1]) && item[1].lang === 'jsx') {
      indexArr.push(index);
      bak.push(item.slice());
    }
  });

  indexArr.forEach((item, index) => {
    const bakJs = assign({}, bak[index][1]);
    bakJs.lang = 'javascript';
    bak[index][1] = bakJs;
    node.splice(item + 1 + index, 0, bak[index]);
  });
}

module.exports = (markdownData) => {
  const content = markdownData.content || [];

  copyjsx(content);

  return markdownData;
};
