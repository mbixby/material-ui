'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactScrollbarSize = require('react-scrollbar-size');

var _reactScrollbarSize2 = _interopRequireDefault(_reactScrollbarSize);

var _scroll = require('scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _withWidth = require('../utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

var _TabScrollButton = require('./TabScrollButton');

var _TabScrollButton2 = _interopRequireDefault(_TabScrollButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTabs', function () {
  return {
    root: {
      overflow: 'hidden'
    },
    flexContainer: {
      display: 'flex'
    },
    scrollingContainer: {
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },
    scrollable: {
      overflowX: 'scroll'
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
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false
    }, _this.tabs = undefined, _this.handleResize = (0, _throttle2.default)(function () {
      _this.updateScrollButtonState();
    }, 100), _this.handleLeftScrollClick = function () {
      _this.moveTabsScroll(-_this.tabs.clientWidth);
    }, _this.handleRightScrollClick = function () {
      _this.moveTabsScroll(_this.tabs.clientWidth);
    }, _this.handleScrollbarSizeChange = function (_ref2) {
      var scrollbarHeight = _ref2.scrollbarHeight;

      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    }, _this.handleTabsScroll = (0, _throttle2.default)(function () {
      _this.updateScrollButtonState();
    }, 100), _this.getClassGroups = function () {
      var _classNames;

      var _this$props = _this.props,
          centered = _this$props.centered,
          classNameProp = _this$props.className,
          scrollable = _this$props.scrollable;

      var classGroups = {};
      var classes = _this.context.styleManager.render(styleSheet);

      classGroups.flexContainer = (0, _classnames2.default)(classes.flexContainer);

      classGroups.root = (0, _classnames2.default)(classes.root, classNameProp);

      classGroups.scroller = (0, _classnames2.default)(classes.scrollingContainer, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.fixed, !scrollable), (0, _defineProperty3.default)(_classNames, classes.scrollable, scrollable), _classNames));

      classGroups.tabItemContainer = (0, _classnames2.default)(classes.flexContainer, (0, _defineProperty3.default)({}, classes.centered, centered && !scrollable));

      return classGroups;
    }, _this.getConditionalElements = function () {
      var _this$props2 = _this.props,
          buttonClassName = _this$props2.buttonClassName,
          scrollable = _this$props2.scrollable,
          scrollButtons = _this$props2.scrollButtons,
          width = _this$props2.width;

      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? _react2.default.createElement(_reactScrollbarSize2.default, {
        onLoad: _this.handleScrollbarSizeChange,
        onChange: _this.handleScrollbarSizeChange
      }) : null;

      var showScrollButtons = scrollable && ((0, _withWidth.isWidthUp)('md', width) && scrollButtons === 'auto' || scrollButtons === 'on');

      conditionalElements.windowResizeListener = showScrollButtons ? _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onResize: _this.handleResize
      }) : null;

      conditionalElements.scrollButtonLeft = showScrollButtons ? _react2.default.createElement(_TabScrollButton2.default, {
        direction: 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: buttonClassName
      }) : null;

      conditionalElements.scrollButtonRight = showScrollButtons ? _react2.default.createElement(_TabScrollButton2.default, {
        className: buttonClassName,
        direction: 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll
      }) : null;

      return conditionalElements;
    }, _this.moveTabsScroll = function (delta) {
      var nextScrollLeft = _this.tabs.scrollLeft + delta;
      _scroll2.default.left(_this.tabs, nextScrollLeft);
    }, _this.scrollSelectedIntoView = function (tabsMeta, tabMeta) {
      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
        _scroll2.default.left(_this.tabs, nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
        _scroll2.default.left(_this.tabs, _nextScrollLeft);
      }
    }, _this.updateScrollButtonState = function () {
      var showLeftScroll = _this.tabs.scrollLeft > 0;
      var showRightScroll = _this.tabs.scrollWidth > _this.tabs.clientWidth + _this.tabs.scrollLeft;

      if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
        _this.setState({
          showLeftScroll: showLeftScroll,
          showRightScroll: showRightScroll
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updatePositionStates(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updatePositionStates(nextProps);
    }
  }, {
    key: 'updatePositionStates',
    value: function updatePositionStates(props) {
      if (this.tabs) {
        var tabsMeta = this.tabs.getBoundingClientRect();
        tabsMeta.scrollLeft = this.tabs.scrollLeft;

        var tabMeta = this.tabs.children[0].children[props.index].getBoundingClientRect();

        this.setState({
          indicatorStyle: {
            left: tabMeta.left + (tabsMeta.scrollLeft - tabsMeta.left),
            width: tabMeta.width }
        });

        this.scrollSelectedIntoView(tabsMeta, tabMeta);

        this.updateScrollButtonState(); // determine if scroll buttons should be shown
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          buttonClassName = _props.buttonClassName,
          centered = _props.centered,
          childrenProp = _props.children,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          index = _props.index,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          scrollable = _props.scrollable,
          scrollButtons = _props.scrollButtons,
          textColor = _props.textColor,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['buttonClassName', 'centered', 'children', 'className', 'fullWidth', 'index', 'indicatorClassName', 'indicatorColor', 'onChange', 'scrollable', 'scrollButtons', 'textColor', 'width']);


      var classGroups = this.getClassGroups();

      var children = _react.Children.map(childrenProp, function (tab, childIndex) {
        return (0, _react.cloneElement)(tab, {
          fullWidth: fullWidth,
          selected: childIndex === index,
          index: childIndex,
          onChange: onChange,
          textColor: textColor
        });
      });

      var conditionalElements = this.getConditionalElements();

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classGroups.root }, other),
        conditionalElements.windowResizeListener,
        conditionalElements.scrollbarSizeListener,
        _react2.default.createElement(
          'div',
          { className: classGroups.flexContainer },
          conditionalElements.scrollButtonLeft,
          _react2.default.createElement(
            'div',
            {
              className: classGroups.scroller,
              style: this.state.scrollerStyle,
              ref: function ref(c) {
                _this2.tabs = c;
              },
              role: 'tablist',
              onScroll: this.handleTabsScroll
            },
            _react2.default.createElement(
              'div',
              { className: classGroups.tabItemContainer },
              children
            ),
            _react2.default.createElement(_TabIndicator2.default, {
              style: this.state.indicatorStyle,
              className: indicatorClassName,
              indicatorColor: indicatorColor
            })
          ),
          conditionalElements.scrollButtonRight
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'accent',
  scrollable: false,
  scrollButtons: 'auto',
  textColor: 'inherit'
};
Tabs.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
Tabs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The CSS class name of the scroll button elements.
   */
  buttonClassName: _propTypes2.default.string,
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
   * The index of the currently selected `Tab`.
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
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: _propTypes2.default.bool,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: _propTypes2.default.oneOf(['auto', 'on', 'off']),
  /**
   * Determines the color of the `Tab`.
   */
  textColor: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['accent', 'inherit']), _propTypes2.default.string]),
  /**
   * @ignore
   * width prop provided by withWidth decorator
   */
  width: _propTypes2.default.string
} : {};
exports.default = (0, _withWidth2.default)()(Tabs);