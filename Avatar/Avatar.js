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

exports.default = Avatar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiAvatar', function (theme) {
  var palette = theme.palette;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: 20,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },
    defaultColor: {
      color: palette.background.default,
      backgroundColor: (0, _colorManipulator.emphasize)(palette.background.default, 0.26)
    },
    img: {
      maxWidth: '100%',
      width: '100%',
      height: 'auto'
    }
  };
});

function Avatar(props, context) {
  var alt = props.alt,
      classNameProp = props.className,
      childrenProp = props.children,
      childrenClassNameProp = props.childrenClassName,
      ComponentProp = props.component,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      other = (0, _objectWithoutProperties3.default)(props, ['alt', 'className', 'children', 'childrenClassName', 'component', 'sizes', 'src', 'srcSet']);


  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.defaultColor, childrenProp && !src && !srcSet), classNameProp);
  var containerProps = (0, _extends3.default)({
    className: className
  }, other);

  var children = null;

  if (childrenProp) {
    if (childrenClassNameProp && _react2.default.isValidElement(childrenProp)) {
      var childrenClassName = (0, _classnames2.default)(childrenClassNameProp, childrenProp.props.className);
      children = _react2.default.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    var imgProps = {
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    };
    children = _react2.default.createElement('img', imgProps);
  }

  return _react2.default.createElement(
    ComponentProp,
    containerProps,
    children
  );
}

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _propTypes2.default.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: _propTypes2.default.string,
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
   * The `sizes` attribute for the `img` element.
   */
  sizes: _propTypes2.default.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: _propTypes2.default.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: _propTypes2.default.string
} : {};

Avatar.defaultProps = {
  alt: '',
  component: 'div'
};

Avatar.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};