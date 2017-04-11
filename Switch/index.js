'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelSwitch = exports.Switch = exports.default = undefined;

var _Switch2 = require('./Switch');

var _Switch3 = _interopRequireDefault(_Switch2);

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch3.default; /* eslint-disable flowtype/require-valid-file-annotation */

exports.Switch = _Switch3.default;


var LabelSwitch = (0, _withSwitchLabel2.default)(_Switch3.default);
exports.LabelSwitch = LabelSwitch;