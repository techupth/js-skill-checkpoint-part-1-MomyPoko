// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let keepMinimum = inventory[0].quantity;
let keepName;
const minimumQuantity = (minimum) => {
  for (let i = 0; i < minimum.length; i++) {
    if (minimum[i].quantity < keepMinimum) {
      keepMinimum = minimum[i].quantity;
      keepName = minimum[i].name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${keepName} ซึ่งมี ${keepMinimum} ชิ้น`;
};

console.log(minimumQuantity(inventory));
