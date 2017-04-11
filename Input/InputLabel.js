'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = InputLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiInputLabel', function (theme) {
  var transitions = theme.transitions;

  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'translate(0, 18px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 0px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: transitions.create('transform', {
        duration: transitions.duration.shorter,
        easing: transitions.easing.easeOut
      })
    }
  };
});

function InputLabel(props, context) {
  var _classNames;

  var disableAnimation = props.disableAnimation,
      children = props.children,
      classNameProp = props.className,
      shrinkProp = props.shrink,
      other = (0, _objectWithoutProperties3.default)(props, ['disableAnimation', 'children', 'className', 'shrink']);
  var muiFormControl = context.muiFormControl,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.dirty || muiFormControl.focused;
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty3.default)(_classNames, classes.shrink, shrink), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? InputLabel.propTypes = {
  /**
   * The contents of the `InputLabel`.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: _propTypes2.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: _propTypes2.default.bool,
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: _propTypes2.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: _propTypes2.default.bool
} : void 0;

InputLabel.defaultProps = {
  disableAnimation: false
};

InputLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object,
  styleManager: _customPropTypes2.default.muiRequired
};