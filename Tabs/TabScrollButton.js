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

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _keyboardArrowLeft = require('../svg-icons/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _keyboardArrowRight = require('../svg-icons/keyboard-arrow-right');

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTabScrollButton', function () {
  return {
    root: {
      background: 'none',
      color: 'inherit',
      flex: '0 0 56px'
    }
  };
});

var _ref = _react2.default.createElement(_keyboardArrowLeft2.default, null);

var _ref2 = _react2.default.createElement(_keyboardArrowRight2.default, null);

function TabScrollButton(props, context) {
  var classNameProp = props.className,
      direction = props.direction,
      onClick = props.onClick,
      visible = props.visible,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'direction', 'onClick', 'visible']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, classNameProp);

  if (!visible) {
    return _react2.default.createElement('div', { className: className });
  }

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: className,
      role: 'button',
      onClick: onClick,
      tabIndex: '-1'
    }, other),
    direction === 'left' ? _ref : _ref2
  );
}

/**
 * @ignore - internal component.
 */
TabScrollButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Which direction should the button indicate?
   */
  direction: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * @ignore
   * Callback to execute for button press
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Should the button be present or just consume space
   */
  visible: _propTypes2.default.bool
} : {};

TabScrollButton.defaultProps = {
  visible: true
};

TabScrollButton.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

exports.default = TabScrollButton;