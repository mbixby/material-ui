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

exports.default = TableCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTableCell', function (theme) {
  return {
    root: {
      borderBottom: '1px solid ' + theme.palette.text.lightDivider,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left'
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' },
    head: {
      whiteSpace: 'pre'
    },
    padding: {
      padding: '0 56px 0 24px',
      '&:last-child': {
        paddingRight: 24
      }
    },
    compact: {
      paddingRight: 24
    },
    checkbox: {
      paddingLeft: 12,
      paddingRight: 12
    },
    footer: {}
  };
});

/**
 * A material table cell.
 *
 * When placed in a `TableHead`, this will automatically render a `th` element.
 *
 * ```jsx
 * <TableCell>Hello</TableCell>
 * ```
 */
function TableCell(props, context) {
  var _classNames;

  var classNameProp = props.className,
      children = props.children,
      compact = props.compact,
      checkbox = props.checkbox,
      numeric = props.numeric,
      padding = props.padding,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'compact', 'checkbox', 'numeric', 'padding']);
  var table = context.table,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var Component = table && table.head ? 'th' : 'td';

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.numeric, numeric), (0, _defineProperty3.default)(_classNames, classes.compact, compact), (0, _defineProperty3.default)(_classNames, classes.checkbox, checkbox), (0, _defineProperty3.default)(_classNames, classes.padding, padding), (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), _classNames), classNameProp);

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  /**
   * If `true`, the cell padding will be adjusted to better accomodate a checkbox.
   */
  checkbox: _react.PropTypes.bool,
  /**
   * The table cell contents.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, will use more compact cell padding to accomodate more content.
   */
  compact: _react.PropTypes.bool,
  /**
   * If set to true, will align content to the right hand side.
   */
  numeric: _react.PropTypes.bool,
  /**
   * If set to false, will disable left/right cell padding.
   */
  padding: _react.PropTypes.bool
} : void 0;

TableCell.defaultProps = {
  checkbox: false,
  compact: false,
  numeric: false,
  padding: true
};

TableCell.contextTypes = {
  table: _react.PropTypes.object,
  styleManager: _customPropTypes2.default.muiRequired
};