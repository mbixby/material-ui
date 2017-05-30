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

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function isDirty(obj) {
  return obj && obj.value && obj.value.length > 0;
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiInput', function (theme) {
  return {
    wrapper: {
      // Mimics the default input display property used by browsers for an input.
      display: 'inline-block',
      position: 'relative',
      fontFamily: theme.typography.fontFamily
    },
    formControl: {
      marginTop: 10,
      marginBottom: 10
    },
    inkbar: {
      '&:after': {
        backgroundColor: theme.palette.primary[500],
        left: 0,
        bottom: -2,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      }
    },
    focused: {},
    error: {
      '&:after': {
        backgroundColor: theme.palette.error[500],
        transform: 'scaleX(1)' }
    },
    input: {
      font: 'inherit',
      padding: '6px 0',
      border: 0,
      display: 'block',
      boxSizing: 'content-box',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0, // Reset for Safari
      color: theme.palette.text.primary,
      width: '100%',
      '&:focus': {
        outline: 0
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        appearance: 'none'
      }
    },
    singleline: {
      height: '1em',
      appearance: 'textfield' },
    multiline: {
      resize: 'none',
      padding: 0
    },
    multilineWrapper: {
      padding: '6px 0'
    },
    disabled: {
      color: theme.palette.text.disabled
    },
    underline: {
      borderBottom: '1px solid ' + theme.palette.text.divider,
      '&$disabled': {
        borderBottomStyle: 'dotted'
      }
    }
  };
});

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
    }, _this.input = null, _this.handleFocus = function (event) {
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
    }, _this.handleRefInput = function (node) {
      _this.input = node;
      if (_this.props.inputRef) {
        _this.props.inputRef(node);
      }
    }, _this.handleRefTextarea = function (node) {
      _this.input = node;
      if (_this.props.inputRef) {
        _this.props.inputRef(node);
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
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          component = _props.component,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          disableUnderline = _props.disableUnderline,
          errorProp = _props.error,
          id = _props.id,
          inputClassNameProp = _props.inputClassName,
          inputPropsProp = _props.inputProps,
          inputRef = _props.inputRef,
          multiline = _props.multiline,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          placeholder = _props.placeholder,
          name = _props.name,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'component', 'defaultValue', 'disabled', 'disableUnderline', 'error', 'id', 'inputClassName', 'inputProps', 'inputRef', 'multiline', 'onBlur', 'onFocus', 'onChange', 'onKeyDown', 'onKeyUp', 'placeholder', 'name', 'rows', 'rowsMax', 'type', 'value']);
      var muiFormControl = this.context.muiFormControl;


      var error = errorProp;

      if (typeof error === 'undefined' && muiFormControl) {
        error = muiFormControl.error;
      }

      var wrapperClassName = (0, _classnames2.default)(classes.wrapper, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.error, error), (0, _defineProperty3.default)(_classNames, classes.focused, this.state.focused), (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.inkbar, !disableUnderline), (0, _defineProperty3.default)(_classNames, classes.multilineWrapper, multiline), (0, _defineProperty3.default)(_classNames, classes.underline, !disableUnderline), _classNames), classNameProp);

      var inputClassName = (0, _classnames2.default)(classes.input, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames2, classes.singleline, !multiline), (0, _defineProperty3.default)(_classNames2, classes.multiline, multiline), _classNames2), inputClassNameProp);

      var required = muiFormControl && muiFormControl.required === true;

      var InputComponent = 'input';
      var inputProps = (0, _extends3.default)({
        ref: this.handleRefInput
      }, inputPropsProp);

      if (component) {
        inputProps = (0, _extends3.default)({
          rowsMax: rowsMax
        }, inputProps);
        InputComponent = component;
      } else if (multiline) {
        if (rows && !rowsMax) {
          inputProps = (0, _extends3.default)({}, inputProps);
          InputComponent = 'textarea';
        } else {
          inputProps = (0, _extends3.default)({
            rowsMax: rowsMax,
            textareaRef: this.handleRefTextarea
          }, inputProps, {
            ref: null
          });
          InputComponent = _Textarea2.default;
        }
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: wrapperClassName }, other),
        _react2.default.createElement(InputComponent, (0, _extends3.default)({
          className: inputClassName,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          onKeyUp: onKeyUp,
          onKeyDown: onKeyDown,
          disabled: disabled,
          'aria-required': required ? true : undefined,
          value: value,
          id: id,
          name: name,
          defaultValue: defaultValue,
          placeholder: placeholder,
          type: type,
          rows: rows
        }, inputProps))
      );
    }
  }]);
  return Input;
}(_react.Component);

Input.defaultProps = {
  disabled: false,
  type: 'text',
  disableUnderline: false,
  multiline: false
};


Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * It's an `input` by default.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The default value of the `Input` element.
   */
  defaultValue: _propTypes2.default.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: _propTypes2.default.bool,
  /**
   * If `true`, the input will indicate an error.
   */
  error: _propTypes2.default.bool,
  /*
   * @ignore
   */
  id: _propTypes2.default.string,
  /**
   * The CSS class name of the input element.
   */
  inputClassName: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes2.default.bool,
  /**
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClean: _propTypes2.default.func,
  /**
   * @ignore
   */
  onDirty: _propTypes2.default.func,
  /**
   * @ignore
   */
  onFocus: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyUp: _propTypes2.default.func,
  /**
   * @ignore
   */
  placeholder: _propTypes2.default.string,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Maxium number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes2.default.string,
  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
} : {};

Input.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styleSheet)(Input);