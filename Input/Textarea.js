'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

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

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24; //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTextarea', {
  root: {
    position: 'relative' },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    resize: 'none',
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on ipads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
});

var Textarea = function (_Component) {
  (0, _inherits3.default)(Textarea, _Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = (0, _debounce2.default)(function (event) {
      _this.syncHeightWithShadow(undefined, event);
    }, 100), _this.handleChange = function (event) {
      var value = event.target.value;
      _this.syncHeightWithShadow(value);
      _this.value = value;
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _this.handleRefInput = function (node) {
      _this.input = node;
      if (_this.props.textareaRef) {
        _this.props.textareaRef(node);
      }
    }, _this.handleRefSinglelineShadow = function (node) {
      _this.singlelineShadow = node;
    }, _this.handleRefShadow = function (node) {
      _this.shadow = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Textarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // <Input> expects the components it renders to respond to 'value'
      // so that it can check whether they are dirty
      this.value = this.props.defaultValue;
      this.setState({
        height: Number(this.props.rows) * rowsHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value || Number(nextProps.rowsMax) !== Number(this.props.rowsMax)) {
        this.syncHeightWithShadow(nextProps.value, null, nextProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: 'syncHeightWithShadow',
    value: function syncHeightWithShadow(newValue, event, props) {
      var shadow = this.shadow;
      var singlelineShadow = this.singlelineShadow;

      var hasNewValue = newValue && newValue !== '';
      var displayText = this.props.hintText && !hasNewValue ? this.props.hintText : newValue;

      if (displayText !== undefined) {
        shadow.value = displayText;
      }

      var lineHeight = singlelineShadow.scrollHeight;
      var newHeight = shadow.scrollHeight;

      // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013
      if (newHeight === undefined) return;

      props = props || this.props;

      if (Number(props.rowsMax) >= Number(props.rows)) {
        newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
      }

      newHeight = Math.max(newHeight, lineHeight);

      if (this.state.height !== newHeight) {
        this.setState({
          height: newHeight
        });

        if (props.onHeightChange) {
          props.onHeightChange(event, newHeight);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          hintText = _props.hintText,
          onChange = _props.onChange,
          onHeightChange = _props.onHeightChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          textareaRef = _props.textareaRef,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'defaultValue', 'disabled', 'hintText', 'onChange', 'onHeightChange', 'rows', 'rowsMax', 'textareaRef', 'value']);


      return _react2.default.createElement(
        'div',
        { className: classes.root, style: { height: this.state.height } },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement('textarea', {
          ref: this.handleRefSinglelineShadow,
          className: (0, _classnames2.default)(classes.shadow, classes.textarea),
          tabIndex: '-1',
          rows: '1',
          readOnly: true,
          'aria-hidden': 'true',
          value: ''
        }),
        _react2.default.createElement('textarea', {
          ref: this.handleRefShadow,
          className: (0, _classnames2.default)(classes.shadow, classes.textarea),
          tabIndex: '-1',
          rows: rows,
          defaultValue: defaultValue,
          'aria-hidden': 'true',
          readOnly: true,
          value: value
        }),
        _react2.default.createElement('textarea', (0, _extends3.default)({
          ref: this.handleRefInput,
          rows: rows,
          className: (0, _classnames2.default)(classes.textarea, className),
          onChange: this.handleChange,
          defaultValue: defaultValue,
          value: value
        }, other))
      );
    }
  }]);
  return Textarea;
}(_react.Component);

Textarea.defaultProps = {
  rows: 1
};


Textarea.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  hintText: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onHeightChange: _propTypes2.default.func,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Maxium number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Use that property to pass a ref callback to the native textarea component.
   */
  textareaRef: _propTypes2.default.func,
  value: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styleSheet)(Textarea);