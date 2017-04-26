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

exports.default = Typography;

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

var headlineMapping = {
  display4: 'h1',
  display3: 'h1',
  display2: 'h1',
  display1: 'h1',
  headline: 'h1',
  title: 'h2',
  subheading: 'h3',
  body2: 'aside',
  body1: 'p'
}; //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiTypography', function (theme) {
  return {
    text: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    'align-left': {
      textAlign: 'left'
    },
    'align-center': {
      textAlign: 'center'
    },
    'align-right': {
      textAlign: 'right'
    },
    'align-justify': {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    secondary: {
      color: theme.palette.text.secondary
    }
  };
});

function Typography(props, context) {
  var _classNames;

  var align = props.align,
      classNameProp = props.className,
      colorInherit = props.colorInherit,
      componentProp = props.component,
      gutterBottom = props.gutterBottom,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      secondary = props.secondary,
      type = props.type,
      other = (0, _objectWithoutProperties3.default)(props, ['align', 'className', 'colorInherit', 'component', 'gutterBottom', 'noWrap', 'paragraph', 'secondary', 'type']);

  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.text, classes[type], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.colorInherit, colorInherit), (0, _defineProperty3.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty3.default)(_classNames, classes.secondary, secondary), (0, _defineProperty3.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty3.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty3.default)(_classNames, classes['align-' + align], align), _classNames), classNameProp);

  var Component = componentProp || (paragraph ? 'p' : headlineMapping[type]) || 'span';

  return _react2.default.createElement(Component, (0, _extends3.default)({ className: className }, other));
}

Typography.propTypes = process.env.NODE_ENV !== "production" ? {
  align: _propTypes2.default.oneOf(['left', 'center', 'right', 'justify']),
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the text will inherit its color.
   */
  colorInherit: _propTypes2.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default we map the type to a good default headline component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes2.default.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes2.default.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes2.default.bool,
  /**
   * If `true`, the secondary color will be applied.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Applies the theme typography styles.
   */
  type: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : {};

Typography.defaultProps = {
  colorInherit: false,
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  secondary: false,
  type: 'body1'
};

Typography.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};