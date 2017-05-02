'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('object-assign');
/**
 * A layout component using the following libs as inspiration.
 *
 * For the implementation:
 * - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
 * - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
 * - https://github.com/roylee0704/react-flexbox-grid
 * - https://material.angularjs.org/latest/layout/introduction
 *
 * Follow this flexbox Guide to better understand the underlying model:
 * - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

var _requirePropFactory = require('../utils/requirePropFactory');

var _requirePropFactory2 = _interopRequireDefault(_requirePropFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GUTTERS = [0, 8, 16, 24, 40];
var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = (0, _defineProperty3.default)({}, 'grid-' + breakpoint, {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });

  GRID_SIZES.forEach(function (size) {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4) + '%';

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/b0508a975d711d6b24c01f57dd5445c22699fac4/scss/mixins/_grid.scss#L69
    /* eslint-enable max-len */
    styles['grid-' + breakpoint + '-' + size] = {
      flexBasis: width,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    _assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};

  GUTTERS.forEach(function (gutter, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['gutter-' + breakpoint + '-' + gutter] = {
      margin: -gutter / 2,
      width: 'calc(100% + ' + gutter + 'px)',
      '& > $typeItem': {
        padding: gutter / 2
      }
    };
  });

  return styles;
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiLayout', function (theme) {
  // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',

  return (0, _extends3.default)({
    typeContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    typeItem: {
      boxSizing: 'border-box',
      flex: '0 0 auto'
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'align-xs-center': {
      alignItems: 'center'
    },
    'align-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (styles, key) {
    // Use side effect for performance.
    generateGrid(styles, theme, key);

    return styles;
  }, {}));
});

function Layout(props, context) {
  var _classNames;

  var children = props.children,
      className = props.className,
      component = props.component,
      container = props.container,
      item = props.item,
      align = props.align,
      direction = props.direction,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      gutter = props.gutter,
      justify = props.justify,
      wrap = props.wrap,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'component', 'container', 'item', 'align', 'direction', 'xs', 'sm', 'md', 'lg', 'xl', 'gutter', 'justify', 'wrap']);


  var classes = context.styleManager.render(styleSheet);
  // workaround: see https://github.com/facebook/flow/issues/1660#issuecomment-297775427
  var ComponentProp = component || Layout.defaultProps.component;

  return _react2.default.createElement(
    ComponentProp,
    (0, _extends3.default)({
      className: (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.typeContainer, container), (0, _defineProperty3.default)(_classNames, classes.typeItem, item), (0, _defineProperty3.default)(_classNames, classes['gutter-xs-' + String(gutter)], container && gutter !== 0), (0, _defineProperty3.default)(_classNames, classes['direction-xs-' + String(direction)], direction !== Layout.defaultProps.direction), (0, _defineProperty3.default)(_classNames, classes['wrap-xs-' + String(wrap)], wrap !== Layout.defaultProps.wrap), (0, _defineProperty3.default)(_classNames, classes['align-xs-' + String(align)], align !== Layout.defaultProps.align), (0, _defineProperty3.default)(_classNames, classes['justify-xs-' + String(justify)], justify !== Layout.defaultProps.justify), (0, _defineProperty3.default)(_classNames, classes['grid-xs'], xs === true), (0, _defineProperty3.default)(_classNames, classes['grid-xs-' + String(xs)], xs && xs !== true), (0, _defineProperty3.default)(_classNames, classes['grid-sm'], sm === true), (0, _defineProperty3.default)(_classNames, classes['grid-sm-' + String(sm)], sm && sm !== true), (0, _defineProperty3.default)(_classNames, classes['grid-md'], md === true), (0, _defineProperty3.default)(_classNames, classes['grid-md-' + String(md)], md && md !== true), (0, _defineProperty3.default)(_classNames, classes['grid-lg'], lg === true), (0, _defineProperty3.default)(_classNames, classes['grid-lg-' + String(lg)], lg && lg !== true), (0, _defineProperty3.default)(_classNames, classes['grid-xl'], xl === true), (0, _defineProperty3.default)(_classNames, classes['grid-xl-' + String(xl)], xl && xl !== true), _classNames), className)
    }, other),
    children
  );
}

Layout.propTypes = process.env.NODE_ENV !== "production" ? {
  children: require('prop-types').any,
  className: require('prop-types').string,
  component: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func]),
  container: require('prop-types').bool,
  item: require('prop-types').bool,
  xs: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  sm: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  md: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  lg: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  xl: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').oneOf([1]), require('prop-types').oneOf([2]), require('prop-types').oneOf([3]), require('prop-types').oneOf([4]), require('prop-types').oneOf([5]), require('prop-types').oneOf([6]), require('prop-types').oneOf([7]), require('prop-types').oneOf([8]), require('prop-types').oneOf([9]), require('prop-types').oneOf([10]), require('prop-types').oneOf([11]), require('prop-types').oneOf([12])]),
  align: require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'stretch']),
  direction: require('prop-types').oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  gutter: require('prop-types').oneOf([0, 8, 16, 24, 40]),
  justify: require('prop-types').oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  wrap: require('prop-types').oneOf(['nowrap', 'wrap', 'wrap-reverse'])
} : {};
Layout.defaultProps = {
  component: 'div',
  container: false,
  item: false,
  align: 'stretch',
  direction: 'row',
  gutter: 16,
  justify: 'flex-start',
  wrap: 'wrap'
};

Layout.contextTypes = {
  styleManager: _customPropTypes2.default.muiRequired
};

/**
 * Add a wrapper component to generate some helper messages in the development
 * environment.
 */
var LayoutWrapper = Layout; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV !== 'production') {
  var requireProp = (0, _requirePropFactory2.default)('Layout');

  LayoutWrapper = function LayoutWrapper(props) {
    return _react2.default.createElement(Layout, props);
  };

  LayoutWrapper.propTypes = {
    align: requireProp('container'),
    direction: requireProp('container'),
    gutter: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    wrap: requireProp('container'),
    xs: requireProp('item')
  };
}

exports.default = LayoutWrapper;