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

var transitionDuration = 4; // 400ms

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MuiLinearProgress', function (theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5,
      backgroundColor: theme.palette.primary[100]
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    bar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      backgroundColor: theme.palette.primary[500]
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      background: 'radial-gradient(' + theme.palette.primary[100] + ' 0%, ' + (theme.palette.primary[100] + ' 16%, transparent 42%)'),
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px',
      animation: 'buffer 3s infinite linear'
    },
    indeterminateBar1: {
      willChange: 'left, right',
      animation: 'indeterminate-1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      willChange: 'left, right',
      animation: 'indeterminate-2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'width',
      transition: 'width .' + transitionDuration + 's linear'
    },
    determinateBar2: {
      display: 'none'
    },
    bufferBar1: {
      transition: 'width .' + transitionDuration + 's linear',
      backgroundColor: theme.palette.primary[100]
    },
    bufferBar2: {
      transition: 'width .' + transitionDuration + 's linear'
    },
    '@keyframes indeterminate-1': {
      '0%': {
        left: '-35%',
        right: '100%'
      },
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate-2': {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    },
    '@keyframes query': {
      '0%': {
        opacity: 1,
        transform: 'translateX(35%) scale(.3, 1)'
      },
      '100%': {
        opacity: 0,
        transform: 'translateX(-50%) scale(0, 1)'
      }
    }
  };
});

function LinearProgress(props) {
  var _classNames, _classNames3, _classNames4;

  var classes = props.classes,
      className = props.className,
      mode = props.mode,
      value = props.value,
      valueBuffer = props.valueBuffer,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'mode', 'value', 'valueBuffer']);

  var rootClasses = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.rootBuffer, mode === 'buffer'), (0, _defineProperty3.default)(_classNames, classes.rootQuery, mode === 'query'), _classNames), className);
  var dashedClasses = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.dashed, mode === 'buffer'));
  var bar1Classes = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, mode === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
  var bar2Classes = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames4, classes.determinateBar2, mode === 'determinate'), (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, mode === 'buffer'), _classNames4));
  var styles = { bar1: {}, bar2: {} };
  var rootProps = {};

  if (mode === 'determinate') {
    styles.bar1.width = value + '%';
    rootProps['aria-valuenow'] = Math.round(value);
  } else if (mode === 'buffer') {
    styles.bar1.width = valueBuffer + '%';
    styles.bar2.width = value + '%';
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rootClasses }, rootProps, other),
    _react2.default.createElement('div', { className: dashedClasses }),
    _react2.default.createElement('div', { className: bar1Classes, style: styles.bar1 }),
    _react2.default.createElement('div', { className: bar2Classes, style: styles.bar2 })
  );
}

LinearProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * The value of progress, only works in determinate and buffer mode.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The value of buffer, only works in buffer mode.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes2.default.number
} : {};

LinearProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0
};

exports.default = (0, _withStyles2.default)(styleSheet)(LinearProgress);