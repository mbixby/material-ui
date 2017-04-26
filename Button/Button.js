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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _colorManipulator = require('../styles/colorManipulator');

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiButton', function (theme) {
  var typography = theme.typography,
      palette = theme.palette,
      transitions = theme.transitions,
      shadows = theme.shadows;


  return {
    root: {
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      fontFamily: typography.fontFamily,
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      borderRadius: 2,
      color: palette.text.primary,
      backgroundColor: 'transparent',
      transition: transitions.create(['background-color', 'box-shadow'], {
        duration: transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(palette.text.primary, 0.12),
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    },
    compact: {
      padding: '0 8px',
      minWidth: 64
    },
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    primary: {
      color: palette.primary[500],
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(palette.primary[500], 0.12)
      }
    },
    accent: {
      color: palette.accent.A200,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(palette.accent.A200, 0.12)
      }
    },
    contrast: {
      color: palette.getContrastText(palette.primary[500]),
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(palette.getContrastText(palette.primary[500]), 0.12)
      }
    },
    raised: {
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[2],
      '&$keyboardFocused': {
        boxShadow: shadows[6]
      },
      '&:active': {
        boxShadow: shadows[8]
      },
      '&$disabled': {
        boxShadow: shadows[0],
        backgroundColor: palette.text.divider
      },
      '&:hover': {
        backgroundColor: palette.grey.A100,
        '&$disabled': {
          backgroundColor: palette.text.divider
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: palette.getContrastText(palette.primary[500]),
      backgroundColor: palette.primary[500],
      '&:hover': {
        backgroundColor: palette.primary[700]
      }
    },
    raisedAccent: {
      color: palette.getContrastText(palette.accent.A200),
      backgroundColor: palette.accent.A200,
      '&:hover': {
        backgroundColor: palette.accent.A400
      }
    },
    raisedContrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    disabled: {
      color: palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: shadows[6],
      '&:active': {
        boxShadow: shadows[12]
      }
    }
  };
});

/**
 * ```jsx
 * <Button>Hello World</Button>
 * ```
 */
//  weak

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          accent = _props.accent,
          children = _props.children,
          classNameProp = _props.className,
          compact = _props.compact,
          contrast = _props.contrast,
          disabled = _props.disabled,
          disableFocusRipple = _props.disableFocusRipple,
          disableRipple = _props.disableRipple,
          fab = _props.fab,
          primary = _props.primary,
          raised = _props.raised,
          other = (0, _objectWithoutProperties3.default)(_props, ['accent', 'children', 'className', 'compact', 'contrast', 'disabled', 'disableFocusRipple', 'disableRipple', 'fab', 'primary', 'raised']);


      var classes = this.context.styleManager.render(styleSheet);
      var flat = !raised && !fab;
      var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, true), (0, _defineProperty3.default)(_classNames, classes.raised, raised || fab), (0, _defineProperty3.default)(_classNames, classes.fab, fab), (0, _defineProperty3.default)(_classNames, classes.primary, flat && primary), (0, _defineProperty3.default)(_classNames, classes.accent, flat && accent), (0, _defineProperty3.default)(_classNames, classes.contrast, flat && contrast), (0, _defineProperty3.default)(_classNames, classes.raisedPrimary, !flat && primary), (0, _defineProperty3.default)(_classNames, classes.raisedAccent, !flat && accent), (0, _defineProperty3.default)(_classNames, classes.raisedContrast, !flat && contrast), (0, _defineProperty3.default)(_classNames, classes.compact, compact), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({
          className: className,
          disabled: disabled,
          focusRipple: !disableFocusRipple,
          ripple: !disableRipple,
          keyboardFocusedClassName: classes.keyboardFocused
        }, other),
        _react2.default.createElement(
          'span',
          { className: classes.label },
          children
        )
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.defaultProps = {
  accent: false,
  component: 'button',
  compact: false,
  contrast: false,
  disabled: false,
  fab: false,
  disableFocusRipple: false,
  primary: false,
  raised: false,
  disableRipple: false,
  type: 'button'
};
Button.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Button;
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent: _propTypes2.default.bool,
  /**
   * The content of the button.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Uses a smaller minWidth, ideal for things like card actions.
   */
  compact: _propTypes2.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the button will use the theme's contrast color.
   */
  contrast: _propTypes2.default.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `ripple` must also be true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, well use floating action button styling.
   */
  fab: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes2.default.string,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * If `true`, the button will use raised styling.
   */
  raised: _propTypes2.default.bool,
  /**
   * @ignore
   */
  type: _propTypes2.default.string
} : {};