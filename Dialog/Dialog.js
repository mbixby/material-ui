'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = require('../styles/transitions');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiDialog', function (theme) {
  return {
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      width: '75%',
      maxHeight: '90vh',
      '&:focus': {
        outline: 'none'
      }
    },
    'dialogWidth-xs': {
      maxWidth: theme.breakpoints.getWidth('xs')
    },
    'dialogWidth-sm': {
      maxWidth: theme.breakpoints.getWidth('sm')
    },
    'dialogWidth-md': {
      maxWidth: theme.breakpoints.getWidth('md')
    },
    fullScreen: {
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 *
 * ```jsx
 * <Dialog>
 *   <DialogContent>...</DialogContent>
 *   <DialogActions>...</DialogActions>
 * </Dialog>
 * ```
 */
//  weak

var Dialog = function (_Component) {
  (0, _inherits3.default)(Dialog, _Component);

  function Dialog() {
    (0, _classCallCheck3.default)(this, Dialog);
    return (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          fullScreen = _props.fullScreen,
          ignoreBackdropClick = _props.ignoreBackdropClick,
          ignoreEscapeKeyUp = _props.ignoreEscapeKeyUp,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          maxWidth = _props.maxWidth,
          open = _props.open,
          onBackdropClick = _props.onBackdropClick,
          onEscapeKeyUp = _props.onEscapeKeyUp,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestClose = _props.onRequestClose,
          paperClassName = _props.paperClassName,
          transition = _props.transition,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'fullScreen', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'enterTransitionDuration', 'leaveTransitionDuration', 'maxWidth', 'open', 'onBackdropClick', 'onEscapeKeyUp', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'paperClassName', 'transition']);


      var classes = this.context.styleManager.render(styleSheet);

      var transitionProps = {
        in: open,
        transitionAppear: true,
        enterTransitionDuration: enterTransitionDuration,
        leaveTransitionDuration: leaveTransitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      };

      var createTransitionFn = void 0;

      if (typeof transition === 'function') {
        createTransitionFn = _react2.default.createElement;
      } else {
        createTransitionFn = _react2.default.cloneElement;
      }

      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.modal, className),
          backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration,
          ignoreBackdropClick: ignoreBackdropClick,
          ignoreEscapeKeyUp: ignoreEscapeKeyUp,
          onBackdropClick: onBackdropClick,
          onEscapeKeyUp: onEscapeKeyUp,
          onRequestClose: onRequestClose,
          show: open
        }, other),
        createTransitionFn(transition, transitionProps, (0, _jsx3.default)(_Paper2.default, {
          elevation: 24,
          className: (0, _classnames2.default)(classes.dialog, classes['dialogWidth-' + maxWidth], paperClassName, (0, _defineProperty3.default)({}, classes.fullScreen, fullScreen))
        }, void 0, children))
      );
    }
  }]);
  return Dialog;
}(_react.Component);

Dialog.defaultProps = {
  fullScreen: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default
};
Dialog.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
exports.default = Dialog;
process.env.NODE_ENV !== "production" ? Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, The dialog will be full-screen.
   */
  fullScreen: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire the `onRequestClose` callback.
   */
  ignoreBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onRequestClose` callback.
   */
  ignoreEscapeKeyUp: _propTypes2.default.bool,
  /**
   * Duration of the animation when the element is entering.
   */
  enterTransitionDuration: _propTypes2.default.number, // eslint-disable-line react/sort-prop-types
  /**
   * Duration of the animation when the element is leaving.
   */
  leaveTransitionDuration: _propTypes2.default.number,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md']),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired when the dialog requests to be closed.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes2.default.bool,
  /**
   * The CSS class name of the paper inner element.
   */
  paperClassName: _propTypes2.default.string,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element])
} : void 0;