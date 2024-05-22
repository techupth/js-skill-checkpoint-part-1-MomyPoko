// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

//เพิ่ม object ใหม่ในท้าย array
myTodo.push({ id: 5, todo: "Walk the dog" });

//เปลี่ยน array index ที่ 3 ใน key todo
myTodo[3].todo = "Go to the gym";

//ลบ object ondex ที่ 4 ใน myTodo
myTodo.pop(myTodo[4]);
console.log(myTodo[3]);
