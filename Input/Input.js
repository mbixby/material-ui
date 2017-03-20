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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function isDirty(obj) {
  return obj && obj.value && obj.value.length > 0;
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiInput', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;

  return {
    wrapper: {
      // Mimics the default input display property used by browsers for an input.
      display: 'inline-block',
      position: 'relative'
    },
    formControl: {
      marginTop: 10,
      marginBottom: 10
    },
    inkbar: {
      '&:after': {
        backgroundColor: palette.accent.A200,
        left: 0,
        bottom: -1,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: transitions.create('transform', {
          duration: transitions.duration.shorter,
          easing: transitions.easing.easeOut
        })
      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      }
    },
    focused: {},
    error: {
      '&:after': {
        backgroundColor: palette.error[500],
        transform: 'scaleX(1)' }
    },
    input: {
      font: 'inherit',
      padding: '6px 0',
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      lineHeight: 1,
      appearance: 'textfield', // Improve type search style.
      color: theme.palette.text.primary,
      width: '100%',
      '&:focus': {
        outline: 0
      },
      '&::-webkit-search-decoration': { // Remove the padding when type=search.
        appearance: 'none'
      }
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed'
    },
    underline: {
      borderBottom: '1px solid ' + theme.palette.text.divider,
      '&$disabled': {
        borderBottomStyle: 'dotted'
      }
    }
  };
});

/**
 * Input
 */

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.input = null, _this.focus = function () {
      return _this.input.focus();
    }, _this.handleFocus = function (event) {
      _this.setState({ focused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ focused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleChange = function (event) {
      if (!_this.isControlled()) {
        _this.checkDirty(_this.input);
      }
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.isControlled()) {
        this.checkDirty(this.props);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.isControlled()) {
        this.checkDirty(this.input);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.isControlled()) {
        this.checkDirty(nextProps);
      }
    }

    // Holds the input reference

  }, {
    key: 'isControlled',
    value: function isControlled() {
      return typeof this.props.value === 'string';
    }
  }, {
    key: 'checkDirty',
    value: function checkDirty(obj) {
      var muiFormControl = this.context.muiFormControl;


      if (isDirty(obj)) {
        if (muiFormControl && muiFormControl.onDirty) {
          muiFormControl.onDirty();
        }
        if (this.props.onDirty) {
          this.props.onDirty();
        }
        return;
      }

      if (muiFormControl && muiFormControl.onClean) {
        muiFormControl.onClean();
      }
      if (this.props.onClean) {
        this.props.onClean();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _props = this.props,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          inputClassNameProp = _props.inputClassName,
          disabled = _props.disabled,
          errorProp = _props.error,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          underline = _props.underline,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'component', 'inputClassName', 'disabled', 'error', 'onBlur', 'onFocus', 'onChange', 'underline']);
      var _context = this.context,
          muiFormControl = _context.muiFormControl,
          styleManager = _context.styleManager;

      var classes = styleManager.render(styleSheet);

      var error = errorProp;

      if (typeof error === 'undefined' && muiFormControl) {
        error = muiFormControl.error;
      }

      var wrapperClassName = (0, _classnames2.default)(classes.wrapper, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.inkbar, underline), (0, _defineProperty3.default)(_classNames, classes.focused, this.state.focused), (0, _defineProperty3.default)(_classNames, classes.error, error), _classNames), classNameProp);

      var inputClassName = (0, _classnames2.default)(classes.input, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.underline, underline), (0, _defineProperty3.default)(_classNames2, classes.disabled, disabled), _classNames2), inputClassNameProp);

      var required = muiFormControl && muiFormControl.required === true;

      return (0, _jsx3.default)('div', {
        className: wrapperClassName
      }, void 0, _react2.default.createElement(ComponentProp, (0, _extends3.default)({
        ref: function ref(c) {
          _this2.input = c;
        },
        className: inputClassName,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        disabled: disabled,
        'aria-required': required ? true : undefined
      }, other)));
    }
  }]);
  return Input;
}(_react.Component);

Input.defaultProps = {
  component: 'input',
  disabled: false,
  type: 'text',
  underline: true
};
Input.contextTypes = {
  muiFormControl: _react.PropTypes.object,
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Input;
process.env.NODE_ENV !== "production" ? Input.propTypes = {
  /**
   * The CSS class name of the wrapper element.
   */
  className: _react.PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a ReactElement.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _react.PropTypes.bool,
  error: _react.PropTypes.bool,
  /**
   * The CSS class name of the input element.
   */
  inputClassName: _react.PropTypes.string,
  /**
   * @ignore
   */
  onBlur: _react.PropTypes.func,
  /**
   * @ignore
   */
  onChange: _react.PropTypes.func,
  /**
   * @ignore
   */
  onClean: _react.PropTypes.func,
  /**
   * @ignore
   */
  onDirty: _react.PropTypes.func,
  /**
   * @ignore
   */
  onFocus: _react.PropTypes.func,
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _react.PropTypes.string,
  /**
   * If set to true, the input will have an underline.
   */
  underline: _react.PropTypes.bool,
  /**
   * The input value, required for a controlled component.
   */
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
} : void 0;