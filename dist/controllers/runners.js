"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.adduser = void 0;

var _Runner = _interopRequireDefault(require("../models/Runner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var adduser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, km, response;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, km = _req$body.km;
            _context.prev = 1;
            console.log(req.body);

            if (!(req.body.name == '')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).send('The name is required'));

          case 5:
            if (!(req.body.km == null || req.body.km < 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).send('The km is required'));

          case 7:
            if (!(req.body.email == '')) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send('The email is required'));

          case 9:
            if (req.body.km < 4) res.send('Debes de caminar más');
            _context.next = 12;
            return _Runner["default"].create({
              name: name,
              email: email,
              km: km
            }, {
              fields: ['name', 'email', 'km']
            });

          case 12:
            response = _context.sent;

            if (!response) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Project create Successfully',
              data: response
            }));

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'SOmething goes wrong',
              data: {}
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 17]]);
  }));

  return function adduser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.adduser = adduser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Runner["default"].findAll();

          case 3:
            response = _context2.sent;
            res.send(response);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var createRunner = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);
            res.send('received');

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createRunner(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();