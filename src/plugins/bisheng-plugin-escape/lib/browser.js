'use strict';

var React = require('react');

module.exports = function () {
  return {
    converters: [
      [
        function (node) { return typeof node === 'function'; },
        function (node, index) {
          var ele = node();
          console.log(ele);
          return React.cloneElement(node(), { key: index });
        }
      ]
    ]
  };
};
