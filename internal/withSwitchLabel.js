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

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak
/* eslint-disable jsx-a11y/label-has-for */

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiSwitchLabel', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: theme.spacing.unit * 2 },
    labelText: {
      fontFamily: theme.typography.fontFamily,
      userSelect: 'none'
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'default'
    }
  };
});

function withSwitchLabel(SwitchComponent) {
  var SwitchLabel = function (_Component) {
    (0, _inherits3.default)(SwitchLabel, _Component);

    function SwitchLabel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SwitchLabel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwitchLabel.__proto__ || (0, _getPrototypeOf2.default)(SwitchLabel)).call.apply(_ref, [this].concat(args))), _this), _this.switch = undefined, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchLabel, [{
      key: 'focus',
      value: function focus() {
        if (this.switch && this.switch.focus) {
          this.switch.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            classes = _props.classes,
            disabled = _props.disabled,
            label = _props.label,
            labelClassNameProp = _props.labelClassName,
            other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'disabled', 'label', 'labelClassName']);


        var labelClassName = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.hasLabel, label && label.length), labelClassNameProp);

        var labelTextClassName = (0, _classnames2.default)(classes.labelText, (0, _defineProperty3.default)({}, classes.disabled, disabled));

        var switchElement = _react2.default.createElement(SwitchComponent, (0, _extends3.default)({
          ref: function ref(node) {
            _this2.switch = node;
          },
          disabled: disabled
        }, other));

        if (!label) {
          return switchElement;
        }

        return _react2.default.createElement(
          'label',
          { className: labelClassName },
          switchElement,
          _react2.default.createElement(
            'span',
            { className: labelTextClassName },
            label
          )
        );
      }
    }]);
    return SwitchLabel;
  }(_react.Component);

  SwitchLabel.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * Useful to extend the style applied to components.
     */
    classes: _propTypes2.default.object.isRequired,
    /**
     * If `true`, the control will be disabled.
     */
    disabled: _propTypes2.default.bool,
    /**
     * The text to be used in an enclosing label element.
     */
    label: _propTypes2.default.node,
    /**
     * The className to be used in an enclosing label element.
     */
    labelClassName: _propTypes2.default.string
  } : {};

  if (process.env.NODE_ENV !== 'production') {
    SwitchLabel.displayName = (0, _wrapDisplayName2.default)(SwitchComponent, 'withSwitchLabel');
  }

  return (0, _withStyles2.default)(styleSheet)(SwitchLabel);
}

exports.default = withSwitchLabel;