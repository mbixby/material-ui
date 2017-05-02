'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _breakpoints = require('../styles/breakpoints');

var _withWidth = require('../utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _Hidden = require('./Hidden');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_HiddenProps = require('./Hidden').babelPluginFlowReactPropTypes_proptype_HiddenProps || require('prop-types').any;
/**
 * Responsively hides children by omission.
 */


function HiddenJs(props) {
  var children = props.children,
      component = props.component,
      only = props.only,
      xsUp = props.xsUp,
      smUp = props.smUp,
      mdUp = props.mdUp,
      lgUp = props.lgUp,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      smDown = props.smDown,
      mdDown = props.mdDown,
      lgDown = props.lgDown,
      xlDown = props.xlDown,
      width = props.width,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'component', 'only', 'xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp', 'xsDown', 'smDown', 'mdDown', 'lgDown', 'xlDown', 'width']);

  // workaround: see https://github.com/facebook/flow/issues/1660#issuecomment-297775427

  var ComponentProp = component || _Hidden.defaultProps.component;
  var visible = true;

  // `only` takes priority.
  if (only && width === only) {
    visible = false;
  } else {
    // determine visibility based on the smallest size up
    for (var i = 0; i < _breakpoints.keys.length; i += 1) {
      var breakpoint = _breakpoints.keys[i];
      var breakpointUp = props[breakpoint + 'Up'];
      var breakpointDown = props[breakpoint + 'Down'];
      if (breakpointUp && (0, _withWidth.isWidthUp)(width, breakpoint) || breakpointDown && (0, _withWidth.isWidthDown)(width, breakpoint, true)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return _react2.default.createElement(
    ComponentProp,
    other,
    children
  );
}

HiddenJs.defaultProps = _Hidden.defaultProps;

exports.default = (0, _withWidth2.default)()(HiddenJs);