export class Node {
    _name: string;
    _score: number;
    _next: Node | null = null;

    constructor(name: string, score: number) {
        this._name = name;
        this._score = score;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getScore(): number {
        return this._score;
    }

    setScore(value: number) {
        this._score = value;
    }

    getNext(): Node | null {
        return this._next;
    }

    setNext(value: Node | null) {
        this._next = value;
    }

    getData(): { name: string, score: number } {
        return {name: this._name, score: this._score}
    }
}