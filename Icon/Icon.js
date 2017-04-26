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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiIcon', function (theme) {
  var palette = theme.palette;

  return {
    root: {
      userSelect: 'none'
    },
    accent: {
      color: palette.accent.A200
    },
    action: {
      color: palette.action.active
    },
    contrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    disabled: {
      color: palette.action.disabled
    },
    error: {
      color: palette.error[500]
    },
    primary: {
      color: palette.primary[500]
    }
  };
});

/**
 * ```jsx
 * <Icon>account_circle</Icon>
 * ```
 */
//  weak
function Icon(props, context) {
  var _classNames;

  var accent = props.accent,
      action = props.action,
      children = props.children,
      classNameProp = props.className,
      contrast = props.contrast,
      disabled = props.disabled,
      error = props.error,
      primary = props.primary,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'action', 'children', 'className', 'contrast', 'disabled', 'error', 'primary']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)('material-icons', classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.accent, accent), (0, _defineProperty3.default)(_classNames, classes.action, action), (0, _defineProperty3.default)(_classNames, classes.contrast, contrast), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.error, error), (0, _defineProperty3.default)(_classNames, classes.primary, primary), _classNames), classNameProp);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's action.active color.
   */
  action: _propTypes2.default.bool,
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the button will contrast the theme's primary color.
   */
  contrast: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's action.disabled color.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the text will use the theme's error color.
   */
  error: _propTypes2.default.bool,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool
} : {};

Icon.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

Icon.defaultProps = {
  accent: false,
  action: false,
  contrast: false,
  disabled: false,
  error: false,
  primary: false
};

Icon.muiName = 'Icon';

exports.default = Icon;