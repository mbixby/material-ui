'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiListItemSecondaryAction', function (theme) {
  return {
    secondaryAction: {
      position: 'absolute',
      right: 4,
      top: '50%',
      marginTop: -theme.spacing.unit * 3
    }
  };
}); //  weak

function ListItemSecondaryAction(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className;

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
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

exports.default = (0, _withStyles2.default)(styleSheet)(ListItemSecondaryAction);