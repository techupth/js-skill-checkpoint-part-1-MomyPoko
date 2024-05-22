// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

//Declare keepMinimum = index 0 in key quantity
let keepMinimum = inventory[0].quantity;
let keepName;
const minimumQuantity = (minimum) => {
  //use for loop to find minimum number
  for (let i = 0; i < minimum.length; i++) {
    //loop2: i = 1 => if 50 < 100
    if (minimum[i].quantity < keepMinimum) {
      //loop2: keepMinimum = 50
      keepMinimum = minimum[i].quantity;
      //loop2: keepName = banana
      keepName = minimum[i].name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${keepName} ซึ่งมี ${keepMinimum} ชิ้น`;
};

console.log(minimumQuantity(inventory));
