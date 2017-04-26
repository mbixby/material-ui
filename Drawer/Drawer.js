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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  }
  // (anchor === 'bottom')
  return 'up';
} //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDrawer', function (theme) {
  return {
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.navDrawer,
      willChange: 'transform',
      '&:focus': {
        outline: 'none'
      },
      WebkitOverflowScrolling: 'touch' },
    left: {
      left: 0,
      right: 'auto'
    },
    right: {
      left: 'auto',
      right: 0
    },
    top: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    bottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    docked: {
      flex: '0 0 auto',
      '& $paper': {
        borderRight: '1px solid ' + theme.palette.text.divider
      }
    },
    modal: {}
  };
});

/**
 * This is a drawer.
 */

var Drawer = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          className = _props.className,
          docked = _props.docked,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          open = _props.open,
          paperClassName = _props.paperClassName,
          elevation = _props.elevation,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchor', 'children', 'className', 'docked', 'enterTransitionDuration', 'leaveTransitionDuration', 'open', 'paperClassName', 'elevation']);
      var _context$styleManager = this.context.styleManager,
          dir = _context$styleManager.theme.dir,
          render = _context$styleManager.render;

      var classes = render(styleSheet);
      var rtl = dir === 'rtl';
      var anchor = anchorProp;
      if (rtl && ['left', 'right'].includes(anchor)) {
        anchor = anchor === 'left' ? 'right' : 'left';
      }

      var slideDirection = getSlideDirection(anchor);

      var drawer = _react2.default.createElement(
        _Slide2.default,
        {
          'in': open,
          direction: slideDirection,
          enterTransitionDuration: enterTransitionDuration,
          leaveTransitionDuration: leaveTransitionDuration,
          transitionAppear: true
        },
        _react2.default.createElement(
          _Paper2.default,
          {
            elevation: docked ? 0 : elevation,
            square: true,
            className: (0, _classnames2.default)(classes.paper, classes[anchor], paperClassName)
          },
          children
        )
      );

      var containerProps = (0, _extends3.default)({
        className: (0, _classnames2.default)(classes.modal, className)
      }, other);

      if (docked) {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.docked, className) },
          drawer
        );
      }

      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration
        }, containerProps, {
          show: open
        }),
        drawer
      );
    }
  }]);
  return Drawer;
}(_react.Component);

Drawer.defaultProps = {
  anchor: 'left',
  docked: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  open: false,
  elevation: 16
};
Drawer.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Drawer;
Drawer.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Side which will the drawer will appear from.
   */
  anchor: _propTypes2.default.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the drawer.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the drawer will dock itself
   * and will no longer slide in with an overlay.
   */
  docked: _propTypes2.default.bool,
  /**
   * The elevation of the drawer.
   */
  elevation: _propTypes2.default.number,
  /**
   * Customizes duration of enter animation (ms)
   */
  enterTransitionDuration: _propTypes2.default.number,
  /**
   * Customizes duration of leave animation (ms)
   */
  leaveTransitionDuration: _propTypes2.default.number,
  /**
   * Callback fired when the internal modal requests to be closed.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes2.default.bool,
  /**
   * The CSS class name of the paper element.
   */
  paperClassName: _propTypes2.default.string
} : {};