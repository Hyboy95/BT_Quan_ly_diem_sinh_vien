
export class Node {
    name: string;
    score: number;
    next: Node | null = null;
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getScore(): number {
        return this.score;
    }
    setScore(score: number) {
        this.score = score;
    }
    readData(): object  {
        return {name: this.name,score: this.score}
    }
}