// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

// Reassign index ที่ 0 ของ inventory key quantity
inventory[0].quantity = 200;

//เพิ่ม Object ใหม่ในท้าย array
inventory.push({ name: "Orange", price: 20, quantity: 300 });

const totalPrice = inventory.reduce((acc, curr) => {
  let keepTotalPrice;
  keepTotalPrice = curr.price * curr.quantity;
  return acc + keepTotalPrice;
}, 0);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`);
