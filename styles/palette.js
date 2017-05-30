'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = createPalette;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _colors = require('./colors');

var _colorManipulator = require('./colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  },
  background: {
    default: _colors.grey[50],
    paper: _colors.white,
    appBar: _colors.grey[100],
    contentFrame: _colors.grey[200],
    status: _colors.grey[300]
  }
}; //  weak

var dark = exports.dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)'
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)'
  },
  background: {
    default: '#303030',
    paper: _colors.grey[800],
    appBar: _colors.grey[900],
    contentFrame: _colors.grey[900],
    status: _colors.black
  }
};

function getContrastText(color) {
  if ((0, _colorManipulator.getContrastRatio)(color, _colors.black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}

function createPalette() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$primary = options.primary,
      primary = _options$primary === undefined ? _colors.indigo : _options$primary,
      _options$accent = options.accent,
      accent = _options$accent === undefined ? _colors.pink : _options$accent,
      _options$error = options.error,
      error = _options$error === undefined ? _colors.red : _options$error,
      _options$type = options.type,
      type = _options$type === undefined ? 'light' : _options$type;


  if (process.env.NODE_ENV !== 'production') {
    var PaletteColorError = function (_Error) {
      (0, _inherits3.default)(PaletteColorError, _Error);

      function PaletteColorError(themeColor) {
        (0, _classCallCheck3.default)(this, PaletteColorError);

        var palette = createPalette();
        var message = [themeColor + ' must have the following attributes: ' + (0, _keys2.default)(palette[themeColor]), 'See the default colors, indigo, or pink, as exported from material-ui/style/colors.'];
        return (0, _possibleConstructorReturn3.default)(this, (PaletteColorError.__proto__ || (0, _getPrototypeOf2.default)(PaletteColorError)).call(this, message.join('\n')));
      }

      return PaletteColorError;
    }(Error);

    if ((0, _difference2.default)((0, _keys2.default)(_colors.indigo), (0, _keys2.default)(primary)).length) {
      throw new PaletteColorError('primary');
    }

    if ((0, _difference2.default)((0, _keys2.default)(_colors.pink), (0, _keys2.default)(accent)).length) {
      throw new PaletteColorError('accent');
    }

    if ((0, _difference2.default)((0, _keys2.default)(_colors.red), (0, _keys2.default)(error)).length) {
      throw new PaletteColorError('error');
    }
  }

  var shades = { dark: dark, light: light };

  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(shades[type], 'Material-UI: the palette type `' + type + '` is not supported.') : void 0;

  return {
    type: type,
    text: shades[type].text,
    action: shades[type].action,
    background: shades[type].background,
    primary: primary,
    accent: accent,
    error: error,
    grey: _colors.grey,
    getContrastText: getContrastText
  };
}