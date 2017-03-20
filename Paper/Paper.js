'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Paper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiPaper', function (theme) {
  var palette = theme.palette;

  var shadows = {};

  theme.shadows.forEach(function (shadow, index) {
    shadows['dp' + index] = {
      boxShadow: shadow
    };
  });

  return (0, _extends3.default)({
    paper: {
      backgroundColor: palette.background.paper
    },
    rounded: {
      borderRadius: 2
    }
  }, shadows);
});

/**
 * A piece of material paper.
 *
 * ```js
 * import Paper from 'material-ui/Paper';
 *
 * const Component = () => <Paper elevation={8}>Hello World</Paper>;
 * ```
 */
function Paper(props, context) {
  var classNameProp = props.className,
      rounded = props.rounded,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties3.default)(props, ['className', 'rounded', 'elevation']);

  var classes = context.styleManager.render(styleSheet);

  var classNameElevation = 'dp' + (elevation >= 0 ? elevation : 0);
  var className = (0, _classnames2.default)(classes.paper, classes[classNameElevation], (0, _defineProperty3.default)({}, classes.rounded, rounded), classNameProp);

  return _react2.default.createElement('div', (0, _extends3.default)({ className: className }, other));
}

process.env.NODE_ENV !== "production" ? Paper.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   */
  elevation: _react.PropTypes.number,
  /**
   * Set to false to disable rounded corners.
   */
  rounded: _react.PropTypes.bool
} : void 0;

Paper.defaultProps = {
  rounded: true,
  elevation: 2
};

Paper.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};