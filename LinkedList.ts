import {Node} from "./Node";

export class LinkedList {
    _head: Node | null;
    _tail: Node | null;
    _size: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    insertFirst(name: string, score: number) {
        let node = new Node(name, score);
        node._next = this._head;
        this._head = node;
        if (!this._tail) {
            this._tail = node;
        }
        this._size++;
    }

    insertLast(name: string, score: number) {
        if (!this._head) {
            this.insertFirst(name, score);
        } else {
            let node = new Node(name, score);
            if (this._tail) {
                this._tail._next = node;
                this._tail = node;
                this._size++;
            }
        }
    }

    showList(): { name: string, score: number }[] {
        let dataList: { name: string, score: number }[] = [];
        let currentNode = this._head;
        while (currentNode) {
            dataList.push(currentNode.getData());
            currentNode = currentNode._next;
        }
        return dataList;
    }

    getScoreList(): number[] {
        let scoreList: number[] = [];
        let currentNode = this._head
        while (currentNode) {
            scoreList.push(currentNode.getScore());
            currentNode = currentNode._next;
        }
        return scoreList;
    }

    totalStudentFail(): number {
        let count = 0;
        this.getScoreList().forEach(item => {
            if (item <= 5) count++;
        })
        return count;
    }

    listStudentMaxScore(): { name: string, score: number }[] {
        let maxScore = Math.max(...this.getScoreList());
        let listStudentMaxScore: { name: string, score: number }[] = []
        this.showList().forEach(item => {
            if (item.score === maxScore) {
                listStudentMaxScore.push(item)
            }
        })
        return listStudentMaxScore;
    }

    findByName(name:string): { name: string, score: number }[] {
        let listStudentByName: { name: string, score: number }[] = [];
        this.showList().forEach(item => {
            if (item.name === name) {
                listStudentByName.push(item);
            }
        })
        return listStudentByName;
    }
}