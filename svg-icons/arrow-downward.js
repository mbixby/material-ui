'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('path', {
  d: 'M0 0h24v24H0V0z',
  fill: 'none'
}); //  weak

var _ref2 = (0, _jsx3.default)('path', {
  d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
});

var ArrowDownward = function ArrowDownward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref,
    _ref2
  );
};
ArrowDownward = (0, _pure2.default)(ArrowDownward);
ArrowDownward.muiName = 'SvgIcon';

exports.default = ArrowDownward;