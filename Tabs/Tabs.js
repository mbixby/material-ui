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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTabs', function () {
  return {
    root: {
      position: 'relative', // For the TabIndicator.
      display: 'flex',
      justifyContent: 'flex-start'
    },
    centered: {
      justifyContent: 'center'
    }
  };
});

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indicatorStyle: {}
    }, _this.tabs = undefined, _this.handleResize = (0, _throttle2.default)(function () {
      _this.updateIndicator(_this.props);
    }, 100), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateIndicator(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateIndicator(nextProps);
    }
  }, {
    key: 'updateIndicator',
    value: function updateIndicator(props) {
      var tabsBox = this.tabs.getBoundingClientRect();
      var tabBox = this.tabs.children[props.index].getBoundingClientRect();

      this.setState({
        indicatorStyle: {
          left: tabBox.left - tabsBox.left,
          width: tabBox.width }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          centered = _props.centered,
          childrenProp = _props.children,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          index = _props.index,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          textColor = _props.textColor,
          other = (0, _objectWithoutProperties3.default)(_props, ['centered', 'children', 'className', 'fullWidth', 'index', 'indicatorClassName', 'indicatorColor', 'onChange', 'textColor']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.centered, centered), classNameProp);

      var children = _react.Children.map(childrenProp, function (tab, childIndex) {
        return (0, _react.cloneElement)(tab, {
          fullWidth: fullWidth,
          selected: childIndex === index,
          index: childIndex,
          onChange: onChange,
          textColor: textColor
        });
      });

      return (0, _jsx3.default)(_reactEventListener2.default, {
        target: 'window',
        onResize: this.handleResize
      }, void 0, _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: className,
          ref: function ref(c) {
            _this2.tabs = c;
          },
          role: 'tablist'
        }, other),
        children,
        (0, _jsx3.default)(_TabIndicator2.default, {
          style: this.state.indicatorStyle,
          className: indicatorClassName,
          indicatorColor: indicatorColor
        })
      ));
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'accent',
  textColor: 'inherit'
};
Tabs.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Tabs;
process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: _propTypes2.default.bool,
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The index of the currently selected `BottomNavigation`.
   */
  index: _propTypes2.default.number,
  /**
   * The CSS class name of the indicator element.
   */
  indicatorClassName: _propTypes2.default.string,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['accent']), _propTypes2.default.string]),
  /**
   * Function called when the index change.
   */
  onChange: _propTypes2.default.func.isRequired,
  /**
   * Determines the color of the `Tab`.
   */
  textColor: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['accent', 'inherit']), _propTypes2.default.string])
} : void 0;