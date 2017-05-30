'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _sinon = require('sinon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsoleErrorMock = function ConsoleErrorMock() {
  var _this = this;

  (0, _classCallCheck3.default)(this, ConsoleErrorMock);

  this.spy = function () {
    _this.consoleErrorContainer = console.error;
    // $FlowFixMe
    console.error = (0, _sinon.spy)();
  };

  this.reset = function () {
    // $FlowFixMe
    console.error = _this.consoleErrorContainer;
    delete _this.consoleErrorContainer;
  };

  this.callCount = function () {
    if (_this.consoleErrorContainer) {
      return console.error.callCount;
    }

    throw new Error('Requested call count before spy() was called');
  };

  this.args = function () {
    if (_this.consoleErrorContainer) {
      return console.error.args;
    }

    throw new Error('Requested call count before spy() was called');
  };
}; //  weak
/* eslint-disable no-console */

exports.default = new ConsoleErrorMock();