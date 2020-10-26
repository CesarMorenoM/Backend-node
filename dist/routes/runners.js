"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _runners = require("../controllers/runners");

var router = (0, _express.Router)();
router.get('/', _runners.getUsers);
router.post('/', _runners.adduser);
var _default = router;
exports["default"] = _default;