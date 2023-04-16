import {LinkedList} from "./LinkedList";

let studentList = new LinkedList();
studentList.insertFirst('HieuC', 5);
studentList.insertLast('HieuT', 10);
studentList.insertLast('Toan', 8);
studentList.insertLast('Tu', 10);
studentList.insertFirst('Viet', 10);
studentList.insertLast('Momo', 3);
studentList.insertFirst('Mimi', 5);
studentList.insertFirst('Meme', 2);
studentList.insertFirst('Meme', 3);
studentList.insertFirst('Meme', 4);
studentList.insertFirst('Meme', 5);
console.table(studentList.showList());
console.table(studentList.getScoreList());
console.log(studentList.totalStudentFail());
console.table(studentList.listStudentMaxScore());
console.table(studentList.findByName('Meme'));