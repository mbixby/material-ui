'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customPropTypes = {}; /* eslint-disable prefer-template */
/* eslint-disable import/no-mutable-exports*/
/* eslint-disable flowtype/require-valid-file-annotation */

if (process.env.NODE_ENV !== 'production') {
  var horizontal = _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['left', 'center', 'right']), _propTypes2.default.number]);

  var vertical = _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['top', 'center', 'bottom']), _propTypes2.default.number]);

  customPropTypes = {
    horizontal: horizontal,
    vertical: vertical,
    origin: _propTypes2.default.shape({
      horizontal: horizontal,
      vertical: vertical
    })
  };
}

if (process.env.NODE_ENV !== 'production') {
  customPropTypes.muiRequired = function (props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    var _PropTypes$object;

    var error = (_PropTypes$object = _propTypes2.default.object).isRequired.apply(_PropTypes$object, [props, propName, componentName, location, propFullName].concat(args));

    if (error) {
      error.message = 'You need to provide a theme to Material-UI. ' + 'Wrap the root component in a `<MuiThemeProvider />`. ' + '\n' + 'Have a look at http://www.material-ui.com/#/get-started/usage for an example.' + '\n' + error.message;
    }

    return error;
  };
} else {
  customPropTypes.muiRequired = function () {
    return null;
  };
}

exports.default = customPropTypes;