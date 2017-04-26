'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = TabIndicator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTabIndicator', function (theme) {
  return {
    root: {
      position: 'relative',
      height: 2,
      marginTop: -2,
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    rootAccent: {
      backgroundColor: theme.palette.accent[500]
    }
  };
}); //  weak

function TabIndicator(props, context) {
  var classNameProp = props.className,
      indicatorColor = props.indicatorColor,
      styleProp = props.style;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.rootAccent, indicatorColor === 'accent'), classNameProp);

  var style = indicatorColor !== 'accent' ? (0, _extends3.default)({}, styleProp, {
    backgroundColor: indicatorColor
  }) : styleProp;

  return _react2.default.createElement('div', { className: className, style: style });
}

/**
 * @ignore - internal component.
 */
TabIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  indicatorColor: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['accent']), _propTypes2.default.string]).isRequired,
  /**
   * @ignore
   * The style of the root element.
   */
  style: _propTypes2.default.shape({
    left: _propTypes2.default.number,
    width: _propTypes2.default.number
  }).isRequired
} : {};

TabIndicator.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};