"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strict_1 = require("node:assert/strict");
const node_test_1 = __importDefault(require("node:test"));
(0, node_test_1.default)("It works!", () => {
    (0, strict_1.deepEqual)(1, 1);
});
