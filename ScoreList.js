"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreList = void 0;
var Node_1 = require("./Node");
var ScoreList = /** @class */ (function () {
    function ScoreList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ScoreList.prototype.insertFirst = function (name, score) {
        var node = new Node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    ScoreList.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new Node_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    ScoreList.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.readData());
            // listData.push({name: currentNode.name, score: currentNode.score} )
            currentNode = currentNode.next;
        }
        return listData;
    };
    ScoreList.prototype.totalStudentsFail = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.score <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    };
    ScoreList.prototype.listScore = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.score);
            // listData.push({name: currentNode.name, score: currentNode.score} )
            currentNode = currentNode.next;
        }
        return listData;
    };
    ScoreList.prototype.listStudentMaxScore = function () {
        var max = Math.max.apply(Math, this.listScore());
        var maxScoreArr = [];
        this.showList().forEach(function (item) {
            if (item.score === max) {
                maxScoreArr.push(item.name);
            }
        });
        return maxScoreArr;
    };
    ScoreList.prototype.findByName = function (name) {
        var result = 'Ten ban tim khong co trong danh sach';
        this.showList().forEach(function (item) {
            if (item.name === name) {
                result = item;
            }
        });
        return result;
    };
    return ScoreList;
}());
exports.ScoreList = ScoreList;
