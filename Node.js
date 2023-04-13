"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Node.prototype.getName = function () {
        return this.name;
    };
    Node.prototype.setName = function (name) {
        this.name = name;
    };
    Node.prototype.getScore = function () {
        return this.score;
    };
    Node.prototype.setScore = function (score) {
        this.score = score;
    };
    Node.prototype.readData = function () {
        return { name: this.name, score: this.score };
    };
    return Node;
}());
exports.Node = Node;
