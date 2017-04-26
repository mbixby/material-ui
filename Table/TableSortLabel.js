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

exports.default = TableSortLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _arrowDownward = require('../svg-icons/arrow-downward');

var _arrowDownward2 = _interopRequireDefault(_arrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTableSortLabel', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;

  return {
    sortLabel: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      background: 'transparent',
      '&:hover': {
        color: palette.text.primary
      },
      '&:focus': {
        color: palette.text.primary
      }
    },
    active: {
      color: palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },
    icon: {
      height: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: transitions.create(['opacity', 'transform'], {
        duration: transitions.duration.shorter
      }),
      userSelect: 'none',
      width: 16
    },
    desc: {
      transform: 'rotate(0deg)'
    },
    asc: {
      transform: 'rotate(180deg)'
    }
  };
});

/**
 * A button based label for placing inside `TableCell` for column sorting.
 */
//  weak

function TableSortLabel(props, context) {
  var active = props.active,
      className = props.className,
      children = props.children,
      direction = props.direction,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'className', 'children', 'direction']);

  var classes = context.styleManager.render(styleSheet);
  var sortLabelClasses = (0, _classnames2.default)(classes.sortLabel, (0, _defineProperty3.default)({}, classes.active, active), className);

  var iconClasses = (0, _classnames2.default)(classes.icon, (0, _defineProperty3.default)({}, classes[direction], !!direction));

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: sortLabelClasses,
      component: 'span',
      ripple: false
    }, other),
    children,
    _react2.default.createElement(_arrowDownward2.default, { className: iconClasses })
  );
}

TableSortLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: _propTypes2.default.bool,
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The current sort direction.
   */
  direction: _propTypes2.default.oneOf(['asc', 'desc'])
} : {};

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
};

TableSortLabel.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};