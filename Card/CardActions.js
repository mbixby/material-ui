'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = CardActions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiCardActions', function () {
  return {
    cardActions: {
      height: 52,
      display: 'flex',
      alignItems: 'center',
      padding: '2px 4px'
    },
    actionSpacing: {
      margin: '0 4px'
    }
  };
});

function CardActions(props, context) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classNameProp = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['disableActionSpacing', 'children', 'className']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardActions, classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    disableActionSpacing ? children : (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.actionSpacing)
  );
}

process.env.NODE_ENV !== "production" ? CardActions.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: _propTypes2.default.bool
} : void 0;

CardActions.defaultProps = {
  disableActionSpacing: false
};

CardActions.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};