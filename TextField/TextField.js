'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Input = require('../Input');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _FormControl = require('../Form/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ```
 * <TextField value="Hello World">
 * ```
 */
//  weak

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    (0, _classCallCheck3.default)(this, TextField);
    return (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextField, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.context.styleManager.theme, nextContext.styleManager.theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          error = _props.error,
          inputClassName = _props.inputClassName,
          inputProps = _props.inputProps,
          label = _props.label,
          labelClassName = _props.labelClassName,
          name = _props.name,
          required = _props.required,
          type = _props.type,
          multiLine = _props.multiLine,
          rows = _props.rows,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'defaultValue', 'disabled', 'error', 'inputClassName', 'inputProps', 'label', 'labelClassName', 'name', 'required', 'type', 'multiLine', 'rows', 'value']);


      return _react2.default.createElement(
        _FormControl2.default,
        (0, _extends3.default)({
          className: className,
          error: error,
          required: required
        }, other),
        label && _react2.default.createElement(
          _Input.InputLabel,
          { className: labelClassName },
          label
        ),
        _react2.default.createElement(_Input.Input, (0, _extends3.default)({
          className: inputClassName,
          defaultValue: defaultValue,
          disabled: disabled,
          multiLine: multiLine,
          name: name,
          rows: rows,
          type: type
        }, inputProps))
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.defaultProps = {
  required: false
};
TextField.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = TextField;
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The default value for the TextField
   */
  defaultValue: _propTypes2.default.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /*
   * @ignore
   */
  id: _propTypes2.default.string,
  /**
   * The CSS class name of the `Input` element.
   */
  inputClassName: _propTypes2.default.string,
  /**
   * Properties applied to the `Input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * The label content.
   */
  label: _propTypes2.default.node,
  /**
   * The CSS class name of the label element.
   */
  labelClassName: _propTypes2.default.string,
  /**
   * If true, a textarea element will be rendered.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * Name attribute of the `Input` element.
   */
  name: _propTypes2.default.string,
  /**
   * If `true`, the label is displayed as required.
   */
  required: _propTypes2.default.bool,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
} : {};