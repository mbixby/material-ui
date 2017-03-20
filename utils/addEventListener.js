'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, event, handler, options) {
  (0, _on2.default)(node, event, handler, options);
  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, options);
    }
  };
};

var _on = require('dom-helpers/events/on');

var _on2 = _interopRequireDefault(_on);

var _off = require('dom-helpers/events/off');

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }