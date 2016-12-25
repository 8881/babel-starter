'use strict';

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sleep = function sleep() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000);
  });
};

var test = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(1);
            console.time('sleep.');
            _context.next = 4;
            return sleep();

          case 4:
            console.timeEnd('sleep.');
            console.log(2);
            console.log(_querystring2.default.stringify({ id: 1 }));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

test();

/**
 * console output
 * 1
 * sleep.: 3006.125ms
 * 2
 * id=1
 */