"use strict";

var __assign = (this && this.__assign) || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
      t[p] = s[p];
  }
  return t;
};

exports.__esModule = true;

var b = require("./schema/base.json");
var d = require("./schema/definitions.json");
var r = require("./schema/root.json");

function schema(s, n) {
  return __assign({}, b, d, n ? s.definitions[n] : r);
}

exports.root = schema(d);
exports.attributes = schema(d, "attributes");
exports.security = schema(d, "security");
exports.category = schema(d, "category");
exports.product = schema(d, "product");
exports.price = schema(d, "price");
exports.address = schema(d, "address");
exports.date = schema(d, "date");
