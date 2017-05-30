'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

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
      backgroundColor: theme.palette.accent.A200
    }
  };
});

/**
 * @ignore - internal component.
 */
//  weak

function TabIndicator(props) {
  var classes = props.classes,
      classNameProp = props.className,
      indicatorColor = props.indicatorColor,
      styleProp = props.style;


  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.rootAccent, indicatorColor === 'accent'), classNameProp);

  var style = indicatorColor !== 'accent' ? (0, _extends3.default)({}, styleProp, {
    backgroundColor: indicatorColor
  }) : styleProp;

  return _react2.default.createElement('div', { className: className, style: style });
}

TabIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
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

exports.default = (0, _withStyles2.default)(styleSheet)(TabIndicator);