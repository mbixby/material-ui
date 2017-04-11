'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = BottomNavigation;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiBottomNavigation', function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
}); //  weak

function BottomNavigation(props, context) {
  var childrenProp = props.children,
      classNameProp = props.className,
      index = props.index,
      onChange = props.onChange,
      showLabels = props.showLabels,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'index', 'onChange', 'showLabels']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react.Children.map(childrenProp, function (child, childIndex) {
    return (0, _react.cloneElement)(child, {
      selected: childIndex === index,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      index: childIndex,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? BottomNavigation.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The index of the currently selected `BottomNavigationButton`.
   */
  index: _propTypes2.default.number,
  /**
   * Function called when the index changes.
   */
  onChange: _propTypes2.default.func,
  /**
   * If `true`, all `BottomNavigationButton`s will show their labels.
   * By default only the selected `BottomNavigationButton` will show its label.
   */
  showLabels: _propTypes2.default.bool
} : void 0;

BottomNavigation.defaultProps = {
  showLabels: false
};

BottomNavigation.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};