'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;


// Sorted ASC by size. That's important.
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Breakpoint', {
  value: require('prop-types').oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}); //  weak

var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

var defaultBreakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakpoints;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var values = keys.map(function (key) {
    return breakpoints[key];
  });

  function up(name) {
    var value = void 0;
    // min-width of xs starts at 0
    if (name === 'xs') {
      value = 0;
    } else {
      value = breakpoints[name] || name;
    }
    return '@media (min-width:' + value + unit + ')';
  }

  function down(name) {
    var value = breakpoints[name] || name;
    return '@media (max-width:' + (value - step / 100) + unit + ')';
  }

  function between(start, end) {
    var startIndex = keys.indexOf(start);
    var endIndex = keys.indexOf(end);
    return '@media (min-width:' + values[startIndex] + unit + ') and ' + ('(max-width:' + (values[endIndex + 1] - step / 100) + unit + ')');
  }

  function only(name) {
    var keyIndex = keys.indexOf(name);
    if (keyIndex === keys.length - 1) {
      return up(name);
    }
    return between(name, name);
  }

  function getWidth(name) {
    return breakpoints[name];
  }

  return {
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    getWidth: getWidth
  };
}