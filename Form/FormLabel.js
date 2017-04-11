'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = FormLabel;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiFormLabel', function (theme) {
  var focusColor = theme.palette.primary.A200;
  return {
    root: {
      color: theme.palette.text.secondary,
      lineHeight: 1
    },
    focused: {
      color: focusColor
    },
    error: {
      color: theme.palette.error[500]
    }
  };
}); //  weak
/* eslint-disable jsx-a11y/label-has-for */

function FormLabel(props, context) {
  var _classNames;

  var children = props.children,
      classNameProp = props.className,
      errorProp = props.error,
      focusedProp = props.focused,
      requiredProp = props.required,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'error', 'focused', 'required']);
  var muiFormControl = context.muiFormControl,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var required = requiredProp;
  var focused = focusedProp;
  var error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }
    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }
    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.focused, focused), (0, _defineProperty3.default)(_classNames, classes.error, error), _classNames), classNameProp);

  var asteriskClassName = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.error, error));

  return _react2.default.createElement(
    'label',
    (0, _extends3.default)({ className: className }, other),
    children,
    required && (0, _jsx3.default)('span', {
      className: asteriskClassName
    }, void 0, '\u2009*')
  );
}

process.env.NODE_ENV !== "production" ? FormLabel.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: _propTypes2.default.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool
} : void 0;

FormLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object,
  styleManager: _customPropTypes2.default.muiRequired
};