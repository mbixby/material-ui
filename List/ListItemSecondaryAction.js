'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;
exports.default = ListItemSecondaryAction;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemSecondaryAction', function () {
  return {
    secondaryAction: {
      position: 'absolute',
      right: 4,
      top: '50%',
      marginTop: -24
    }
  };
}); //  weak

function ListItemSecondaryAction(props, context) {
  var children = props.children,
      classNameProp = props.className;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.secondaryAction, classNameProp);

  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
}

ListItemSecondaryAction.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string
} : {};

ListItemSecondaryAction.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';