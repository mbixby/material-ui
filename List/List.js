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

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiList', function () {
  return {
    root: {
      flex: '1 1 auto',
      overflow: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },
    subheader: {
      paddingTop: 0
    }
  };
});

/**
 * A material list root element.
 *
 * ```jsx
 * <List>
 *   <ListItem>....</ListItem>
 * </List>
 * ```
 */
//  weak

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dense: this.props.dense
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          disablePadding = _props.disablePadding,
          children = _props.children,
          dense = _props.dense,
          subheader = _props.subheader,
          rootRef = _props.rootRef,
          other = (0, _objectWithoutProperties3.default)(_props, ['className', 'component', 'disablePadding', 'children', 'dense', 'subheader', 'rootRef']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.dense, dense), (0, _defineProperty3.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty3.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);

      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ ref: rootRef, className: className }, other),
        subheader,
        children
      );
    }
  }]);
  return List;
}(_react.Component);

List.defaultProps = {
  component: 'div',
  dense: false,
  disablePadding: false
};
List.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};
List.childContextTypes = {
  dense: _propTypes2.default.bool
};
exports.default = List;
process.env.NODE_ENV !== "production" ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: _propTypes2.default.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: _propTypes2.default.bool,
  /**
   * @ignore
   */
  rootRef: _propTypes2.default.func,
  /**
   * The content of the component, normally `ListItem`.
   */
  subheader: _propTypes2.default.node
} : void 0;