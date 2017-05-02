'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hidden = require('./Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Breakpoints = require('../styles/breakpoints').babelPluginFlowReactPropTypes_proptype_Breakpoints || require('prop-types').any;

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_DefaultProps', {
  value: require('prop-types').shape({
    component: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func]).isRequired
  })
});
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_HiddenProps', {
  value: require('prop-types').shape({
    children: require('prop-types').any,
    className: require('prop-types').string,
    component: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func]),
    only: babelPluginFlowReactPropTypes_proptype_Breakpoints,
    xsUp: require('prop-types').bool,
    smUp: require('prop-types').bool,
    mdUp: require('prop-types').bool,
    lgUp: require('prop-types').bool,
    xlUp: require('prop-types').bool,
    xsDown: require('prop-types').bool,
    smDown: require('prop-types').bool,
    mdDown: require('prop-types').bool,
    lgDown: require('prop-types').bool,
    xlDown: require('prop-types').bool
  })
});
var defaultProps = exports.defaultProps = {
  component: 'div',
  xsUp: false,
  smUp: false,
  mdUp: false,
  lgUp: false,
  xlUp: false,
  xsDown: false,
  smDown: false,
  mdDown: false,
  lgDown: false,
  xlDown: false
};

/**
 * Responsively hides children based on the selected implementation.
 */
function Hidden(props) {
  var implementation = props.implementation,
      other = (0, _objectWithoutProperties3.default)(props, ['implementation']);


  if (implementation === 'js') {
    return _react2.default.createElement(_Hidden2.default, other);
  }

  throw new Error('<Hidden implementation="css" /> is not yet implemented');
}

Hidden.defaultProps = {
  implementation: 'js'
};

exports.default = Hidden;