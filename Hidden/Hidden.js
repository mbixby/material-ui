'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('object-assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HiddenJs = require('./HiddenJs');

var _HiddenJs2 = _interopRequireDefault(_HiddenJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_HiddenProps = require('./types').babelPluginFlowReactPropTypes_proptype_HiddenProps || require('prop-types').any;

/**
 * Responsively hides children based on the selected implementation.
 */
function Hidden(props) {
  var implementation = props.implementation,
      other = (0, _objectWithoutProperties3.default)(props, ['implementation']);


  if (implementation === 'js') {
    return _react2.default.createElement(_HiddenJs2.default, other);
  }

  throw new Error('<Hidden implementation="css" /> is not yet implemented');
}

Hidden.propTypes = process.env.NODE_ENV !== "production" ? _assign({}, babelPluginFlowReactPropTypes_proptype_HiddenProps === require('prop-types').any ? {} : babelPluginFlowReactPropTypes_proptype_HiddenProps, {
  implementation: require('prop-types').oneOf(['js', 'css'])
}) : {};
Hidden.defaultProps = {
  implementation: 'js',
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

exports.default = Hidden;