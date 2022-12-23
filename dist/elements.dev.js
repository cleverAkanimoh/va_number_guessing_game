"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastPage = exports.middlePage = exports.guessBtn = exports.hint = exports.input = exports.header = exports.startingPage = exports.startBtn = exports.livesLeft = exports.levelBtn = void 0;

var _getElements = _interopRequireDefault(require("./getElements.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var levelBtn = document.querySelectorAll('.btn'); // starting page

exports.levelBtn = levelBtn;
var startBtn = (0, _getElements["default"])('#startBtn');
exports.startBtn = startBtn;
var startingPage = (0, _getElements["default"])('#startingPage'); // middlepage

exports.startingPage = startingPage;
var header = (0, _getElements["default"])('header');
exports.header = header;
var input = (0, _getElements["default"])('#guessInput input');
exports.input = input;
var guessBtn = (0, _getElements["default"])('#guessBtn');
exports.guessBtn = guessBtn;
var hint = (0, _getElements["default"])('#hint');
exports.hint = hint;
var livesLeft = (0, _getElements["default"])('samp');
exports.livesLeft = livesLeft;
var middlePage = (0, _getElements["default"])('#middlePage'); // last page

exports.middlePage = middlePage;
var lastPage = (0, _getElements["default"])('#lastPage');
exports.lastPage = lastPage;