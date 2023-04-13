import {Node} from "./Node";

export class ScoreList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number) {
        let node = new Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size ++;
    }

    insertLast(name: string, score: number) {
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let node = new Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size ++;
        }
    }

    showList() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.readData());
            // listData.push({name: currentNode.name, score: currentNode.score} )
            currentNode = currentNode.next;
        }
        return listData;
    }

    totalStudentsFail() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.score <= 5) {
                count ++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }
    listScore() {
        let listData = [];
        let currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.score);
            // listData.push({name: currentNode.name, score: currentNode.score} )
            currentNode = currentNode.next;
        }
        return listData;
    }
    listStudentMaxScore() {
        let max = Math.max (...this.listScore());
        let maxScoreArr = []
        this.showList().forEach(item => {
            if (item.score === max) {
                maxScoreArr.push(item.name);
            }
        })
        return maxScoreArr;
    }
    findByName(name: string) {
        let result = 'Ten ban tim khong co trong danh sach'
        this.showList().forEach(item => {
            if (item.name === name) {
                result = item;
            }
        })
        return result;
    }
}