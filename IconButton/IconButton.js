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

exports.default = IconButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiIconButton', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;


  return {
    iconButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: 24,
      width: 48,
      height: 48,
      padding: 0,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      color: palette.action.active,
      zIndex: 1,
      transition: transitions.create('background-color', {
        duration: transitions.duration.shortest
      })
    },
    disabled: {
      color: palette.action.disabled
    },
    accent: {
      color: palette.accent.A200
    },
    contrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    icon: {
      width: '1em',
      height: '1em'
    },
    keyboardFocused: {
      backgroundColor: palette.text.divider
    }
  };
});

/**
 * ```jsx
 * <IconButton>account_circle</IconButton>
 * ```
 *
 * You can refer to the [Icons](#/style/icons) section of the documentation
 * regarding the available icons.
 */
function IconButton(props, context) {
  var _classNames;

  var accent = props.accent,
      buttonRef = props.buttonRef,
      children = props.children,
      className = props.className,
      contrast = props.contrast,
      disabled = props.disabled,
      iconClassNameProp = props.iconClassName,
      other = (0, _objectWithoutProperties3.default)(props, ['accent', 'buttonRef', 'children', 'className', 'contrast', 'disabled', 'iconClassName']);

  var classes = context.styleManager.render(styleSheet);
  var iconClassName = (0, _classnames2.default)(classes.icon, iconClassNameProp);
  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.iconButton, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.accent, accent), (0, _defineProperty3.default)(_classNames, classes.contrast, contrast), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      keyboardFocusedClassName: classes.keyboardFocused,
      disabled: disabled,
      ref: buttonRef
    }, other),
    (0, _jsx3.default)('span', {
      className: classes.label
    }, void 0, typeof children === 'string' ? (0, _jsx3.default)(_Icon2.default, {
      className: iconClassName
    }, void 0, children) : _react.Children.map(children, function (child) {
      if (child.type && child.type.muiName === 'Icon') {
        return (0, _react.cloneElement)(child, {
          className: (0, _classnames2.default)(iconClassName, child.props.className)
        });
      }

      return child;
    }))
  );
}

process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
  /**
   * If true, will use the theme's accent color.
   */
  accent: _react.PropTypes.bool,
  /**
   * @ignore
   */
  buttonRef: _react.PropTypes.func,
  /**
   * The icon element.
   * If a string is passed, it will be used as a material icon font ligature.
   * As a prerequisite, you must include the material icon font.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, will use the theme's contrast color.
   */
  contrast: _react.PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * The CSS class name of the icon element if child is a string.
   */
  iconClassName: _react.PropTypes.string,
  /**
   * If false, the ripple effect will be disabled.
   */
  ripple: _react.PropTypes.bool
} : void 0;

IconButton.defaultProps = {
  accent: false,
  contrast: false,
  disabled: false,
  ripple: true
};

IconButton.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};