'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

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
}

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

function Drawer(props, context) {
  var anchorProp = props.anchor,
      children = props.children,
      classes = props.classes,
      className = props.className,
      docked = props.docked,
      enterTransitionDuration = props.enterTransitionDuration,
      leaveTransitionDuration = props.leaveTransitionDuration,
      open = props.open,
      paperClassName = props.paperClassName,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties3.default)(props, ['anchor', 'children', 'classes', 'className', 'docked', 'enterTransitionDuration', 'leaveTransitionDuration', 'open', 'paperClassName', 'elevation']);


  var rtl = context.styleManager.theme.dir === 'rtl';
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
      backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration,
      className: (0, _classnames2.default)(classes.modal, className)
    }, other, {
      show: open
    }),
    drawer
  );
}

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
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
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

exports.default = (0, _withStyles2.default)(styleSheet)(Drawer);