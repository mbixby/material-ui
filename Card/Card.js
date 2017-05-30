'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCard', {
  card: {
    overflow: 'hidden'
  }
});

function Card(props) {
  var classes = props.classes,
      classNameProp = props.className,
      raised = props.raised,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'raised']);

  var className = (0, _classnames2.default)(classes.card, classNameProp);

  return _react2.default.createElement(_Paper2.default, (0, _extends3.default)({ className: className, elevation: raised ? 8 : 2 }, other));
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: _propTypes2.default.bool
} : {};

Card.defaultProps = {
  raised: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(Card);