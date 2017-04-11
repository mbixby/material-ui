'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _activeElement = require('dom-helpers/activeElement');

var _activeElement2 = _interopRequireDefault(_activeElement);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _addEventListener = require('../utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _helpers = require('../utils/helpers');

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _modalManager = require('./modalManager');

var _Backdrop = require('./Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modals don't open on the server so this won't break concurrency.
 * Could also put this on context.
 */
//  weak

var modalManager = (0, _modalManager.createModalManager)();

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiModal', function (theme) {
  return {
    modal: {
      display: 'flex',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: theme.zIndex.dialog,
      top: 0,
      left: 0
    }
  };
});

/**
 * TODO: Still a WIP
 */

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.show) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      if (this.props.show === true) {
        this.handleShow();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show && this.state.exited) {
        this.setState({ exited: false });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.props.show && nextProps.show) {
        this.checkForFocus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.show && this.props.show) {
        this.handleShow();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.show || !this.state.exited) {
        this.handleHide();
      }
      this.mounted = false;
    }
  }, {
    key: 'checkForFocus',
    value: function checkForFocus() {
      if (_inDOM2.default) {
        this.lastFocus = (0, _activeElement2.default)();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(this)));
      var modalContent = this.modal && this.modal.lastChild;
      var focusInModal = currentFocus && (0, _contains2.default)(modalContent, currentFocus);

      if (modalContent && !focusInModal) {
        this.lastFocus = currentFocus;

        if (!modalContent.hasAttribute('tabIndex')) {
          modalContent.setAttribute('tabIndex', -1);
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".') : void 0;
        }

        modalContent.focus();
      }
    }
  }, {
    key: 'restoreLastFocus',
    value: function restoreLastFocus() {
      if (this.lastFocus && this.lastFocus.focus) {
        this.lastFocus.focus();
        this.lastFocus = undefined;
      }
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      var doc = (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(this));
      this.props.modalManager.add(this);
      this.onDocumentKeyUpListener = (0, _addEventListener2.default)(doc, 'keyup', this.handleDocumentKeyUp);
      this.onFocusListener = (0, _addEventListener2.default)(doc, 'focus', this.handleFocusListener, true);
      this.focus();
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.props.modalManager.remove(this);
      this.onDocumentKeyUpListener.remove();
      this.onFocusListener.remove();
      this.restoreLastFocus();
    }
  }, {
    key: 'renderBackdrop',
    value: function renderBackdrop() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _props = this.props,
          backdropComponent = _props.backdropComponent,
          backdropClassName = _props.backdropClassName,
          backdropTransitionDuration = _props.backdropTransitionDuration,
          backdropInvisible = _props.backdropInvisible,
          show = _props.show;


      return _react2.default.createElement(
        _Fade2.default,
        (0, _extends3.default)({
          'in': show,
          transitionAppear: true,
          enterTransitionDuration: backdropTransitionDuration,
          leaveTransitionDuration: backdropTransitionDuration,
          timeout: backdropTransitionDuration + 20
        }, other),
        _react2.default.createElement(backdropComponent, {
          invisible: backdropInvisible,
          className: backdropClassName,
          onClick: this.handleBackdropClick
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          disableBackdrop = _props2.disableBackdrop,
          backdropComponent = _props2.backdropComponent,
          backdropClassName = _props2.backdropClassName,
          backdropTransitionDuration = _props2.backdropTransitionDuration,
          backdropInvisible = _props2.backdropInvisible,
          ignoreBackdropClick = _props2.ignoreBackdropClick,
          ignoreEscapeKeyUp = _props2.ignoreEscapeKeyUp,
          children = _props2.children,
          className = _props2.className,
          modalManagerProp = _props2.modalManager,
          onBackdropClick = _props2.onBackdropClick,
          onEscapeKeyUp = _props2.onEscapeKeyUp,
          onRequestClose = _props2.onRequestClose,
          onEnter = _props2.onEnter,
          onEntering = _props2.onEntering,
          onEntered = _props2.onEntered,
          onExit = _props2.onExit,
          onExiting = _props2.onExiting,
          onExited = _props2.onExited,
          show = _props2.show,
          other = (0, _objectWithoutProperties3.default)(_props2, ['disableBackdrop', 'backdropComponent', 'backdropClassName', 'backdropTransitionDuration', 'backdropInvisible', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'children', 'className', 'modalManager', 'onBackdropClick', 'onEscapeKeyUp', 'onRequestClose', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'show']);


      var classes = this.context.styleManager.render(styleSheet);
      var mount = show || !this.state.exited;

      if (!mount) {
        return null;
      }

      var transitionCallbacks = {
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleTransitionExited
      };

      var modalChild = _react2.default.Children.only(children);

      var _modalChild$props = modalChild.props,
          role = _modalChild$props.role,
          tabIndex = _modalChild$props.tabIndex;


      var childProps = {};
      var backdropProps = void 0;

      if (role === undefined) {
        childProps.role = role === undefined ? 'document' : role;
      }

      if (tabIndex === undefined) {
        childProps.tabIndex = tabIndex == null ? '-1' : tabIndex;
      }

      if (backdropInvisible && modalChild.props.hasOwnProperty('in')) {
        (0, _keys2.default)(transitionCallbacks).forEach(function (key) {
          childProps[key] = (0, _helpers.createChainedFunction)(transitionCallbacks[key], modalChild.props[key]);
        });
      } else {
        backdropProps = transitionCallbacks;
      }

      if ((0, _keys2.default)(childProps).length) {
        modalChild = _react2.default.cloneElement(modalChild, childProps);
      }

      return _react2.default.createElement(
        _Portal2.default,
        { open: true, ref: function ref(c) {
            _this2.mountNode = c ? c.getLayer() : c;
          } },
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({
            className: (0, _classnames2.default)(classes.modal, className),
            ref: function ref(c) {
              _this2.modal = c;
            }
          }, other),
          !disableBackdrop && this.renderBackdrop(backdropProps),
          modalChild
        )
      );
    }
  }]);
  return Modal;
}(_react.Component);

Modal.defaultProps = {
  backdropComponent: _Backdrop2.default,
  backdropTransitionDuration: 300,
  backdropInvisible: false,
  disableBackdrop: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  modalManager: modalManager,
  show: false
};
Modal.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    exited: false
  };
  this.mounted = false;
  this.lastFocus = undefined;
  this.modal = null;
  this.mountNode = null;
  this.onDocumentKeyUpListener = undefined;
  this.onFocusListener = undefined;

  this.handleFocusListener = function () {
    if (!_this3.mounted || !_this3.props.modalManager.isTopModal(_this3)) {
      return;
    }

    var currentFocus = (0, _activeElement2.default)((0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(_this3)));
    var modalContent = _this3.modal && _this3.modal.lastChild;

    if (modalContent && modalContent !== currentFocus && !(0, _contains2.default)(modalContent, currentFocus)) {
      modalContent.focus();
    }
  };

  this.handleDocumentKeyUp = function (event) {
    if (!_this3.mounted || !_this3.props.modalManager.isTopModal(_this3)) {
      return;
    }

    if ((0, _keycode2.default)(event) === 'esc') {
      var _props3 = _this3.props,
          onEscapeKeyUp = _props3.onEscapeKeyUp,
          onRequestClose = _props3.onRequestClose,
          ignoreEscapeKeyUp = _props3.ignoreEscapeKeyUp;


      if (onEscapeKeyUp) {
        onEscapeKeyUp(event);
      }

      if (onRequestClose && !ignoreEscapeKeyUp) {
        onRequestClose(event);
      }
    }
  };

  this.handleBackdropClick = function (event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    var _props4 = _this3.props,
        onBackdropClick = _props4.onBackdropClick,
        onRequestClose = _props4.onRequestClose,
        ignoreBackdropClick = _props4.ignoreBackdropClick;


    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onRequestClose && !ignoreBackdropClick) {
      onRequestClose(event);
    }
  };

  this.handleTransitionExited = function () {
    _this3.setState({ exited: true });
    _this3.handleHide();
    if (_this3.props.onExited) {
      var _props5;

      (_props5 = _this3.props).onExited.apply(_props5, arguments);
    }
  };
};

exports.default = Modal;
process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  /**
   * The CSS class name of the backdrop element.
   */
  backdropClassName: _propTypes2.default.string,
  /**
   * Pass a component class to use as the backdrop.
   */
  backdropComponent: _propTypes2.default.func,
  /**
   * If `true`, the backdrop is invisible.
   */
  backdropInvisible: _propTypes2.default.bool,
  /**
   * Duration in ms for the backgrop transition.
   */
  backdropTransitionDuration: _propTypes2.default.number,
  /**
   * Content of the modal.
   */
  children: _propTypes2.default.element,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the backdrop is disabled.
   */
  disableBackdrop: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire the `onRequestClose` callback.
   */
  ignoreBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onRequestClose` callback.
   */
  ignoreEscapeKeyUp: _propTypes2.default.bool,
  /**
   * @ignore
   */
  modalManager: _propTypes2.default.object,
  /**
   * Callback fires when the backdrop is clicked on.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired before the modal is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the modal is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired when the modal has entered.
   */
  onEntered: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fires when the escape key is pressed and the modal is in focus.
   */
  onEscapeKeyUp: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the modal is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the modal is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired when the modal has exited.
   */
  onExited: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired when the modal requests to be closed.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If `true`, the Modal is visible.
   */
  show: _propTypes2.default.bool
} : void 0;