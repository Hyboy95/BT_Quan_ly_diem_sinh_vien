import {ScoreList} from "./ScoreList";

let listScoreOfStudent = new ScoreList();
// listScoreOfStudent.insertFirst('Hieu', 5);
listScoreOfStudent.insertLast('Toan', 9);
listScoreOfStudent.insertFirst('DucAnh', 10);
listScoreOfStudent.insertLast('Hieu', 6);
listScoreOfStudent.insertLast('Hieu1', 10);
listScoreOfStudent.insertLast('Hieu2', 2);
console.table(listScoreOfStudent.showList());
console.table(listScoreOfStudent.totalStudentsFail());
console.table(listScoreOfStudent.listScore());
console.table(listScoreOfStudent.listStudentMaxScore());
console.log(listScoreOfStudent.findByName('aaa'));
console.log(listScoreOfStudent.findByName('Hieu'));

